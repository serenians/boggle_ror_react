class Boggle < ApplicationRecord


  def initialize(*args)
    super(*args)
  end


  def generateLetterString
    letters = 'aaafrsaaeeeeaafirsadennnaeeeemaeegmuaegmnnafirsybjkqxzccenstceiiltceilptceipstddhnotdhhlordhlnordhlnoreiiittemotttensssufiprsygorrvwiprrrynootuwooottu'
    letters.split('').sample(16)
  end

end
