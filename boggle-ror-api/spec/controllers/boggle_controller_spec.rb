require 'rails_helper'

RSpec.describe BoggleController, type: :controller do

  describe 'GET /api' do
    it 'Board should return status 200 and have tiles object containing 16 Characters ' do
      get ('index')

      json = JSON.parse(response.body);

      expect(response.status == 200)
      expect(json['tiles'].length).to eql(16)
    end
  end

end
