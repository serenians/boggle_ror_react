# controller class for managing words in the board
class WordsController < ApplicationController

  def initialize(dictionary_gateway: DictionaryGateway.new)
    @dictionary_gateway = dictionary_gateway;
  end

  #
  # following the create convention - even though not using
  # resource: BoggleBoard with constraints
  # @return [Object]
  def create
    word = Word.new(params['term'], false)

    # check to see if the word exists on the board
    board = Boggle.new
    exists = board.search(word.term, params['tiles'])

    # now, see if the word is an actual English word
    if exists

      # check the cache first - only go to the oxford dictionary if
      # it doesn't exist in our simple word cache
      word_cache_store = MiniCache::Store.new
      if !word_cache_store.get(word.term).nil?
        word.exists = true
      else
        # allowing exceptions from underlying api to throw 500 status code
        # and generate a log entry - to protect system from downstream
        # latency and failures, use circuit breaker
        word.exists = @dictionary_gateway.exists(word.term)
        word_cache_store.set(word.term, '') if word.exists

      end
    end

    render json: word
  end

end