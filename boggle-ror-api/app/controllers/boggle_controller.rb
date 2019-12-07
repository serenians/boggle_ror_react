class BoggleController < ApplicationController
  def index
    render json: 'ok'
  end

  def start
    @boggle = Boggle.new
    render json: @boggle.generateLetterString
end

  def check

  end

  def submit

  end
end
