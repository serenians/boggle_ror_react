class BoggleController < ApplicationController

  def index

    # consider a serializer? - need a strategy for managing
    # REST JSON contracts - often do not want internal
    # model properties to be included in serialization process
    @board = Boggle.new
    render json: @board
  end
end
