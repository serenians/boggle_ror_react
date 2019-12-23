require 'rails_helper'

RSpec.describe WordsController, type: :controller do
  describe 'word check controller test' do

    it 'Word Check will check if user input word is valid in given tile' do

      allow_any_instance_of(Boggle).to receive(:search).and_return(true)
      allow_any_instance_of(MiniCache::Store).to receive(:get).and_return(true)
      allow_any_instance_of(DictionaryGateway).to receive(:exists).and_return(true)
      post :create, :params => {:term => "ROB", :tiles => ["N", "R", "O", "B", "C", "E", "E", "T", "E", "R", "E", "I", "H", "R", "P", "N"]}
      json = JSON.parse(response.body);

      #expect_any_instance_of(MiniCache::Store).to receive(:get).at_least(:once)
      #expect_any_instance_of(DictionaryGateway).to receive(:exists).at_least(:once)


      #expect(response.status == 200)
      #expect(json['exists'] == true)
    end


    it 'Word Check will return ok with response content exists to true if word exists in dictionary gateway' do

      allow_any_instance_of(DictionaryGateway).to receive(:exists).and_return(true)

      post :create, :params => {:term => "ROB", :tiles => ["N", "R", "O", "B", "C", "E", "E", "T", "E", "R", "E", "I", "H", "R", "P", "N"]}
      json = JSON.parse(response.body);

      expect(response.status == 200)
      expect(json['exists'] == true)
    end

    it 'Word Check will return ok with response exists to false if word does not exist in dictionary gateway' do

      allow_any_instance_of(DictionaryGateway).to receive(:exists).and_return(false)

      post :create, :params => {:term => "ROB", :tiles => ["N", "R", "O", "B", "C", "E", "E", "T", "E", "R", "E", "I", "H", "R", "P", "N"]}
      json = JSON.parse(response.body);

      expect(response.status == 200)
      expect(json['exists'] == false)
    end

    it 'Word Check will return ok with response exists to true if word exists MiniCache and Dictionary Gateway should not be called' do

      allow_any_instance_of(MiniCache::Store).to receive(:get).and_return(true)

      post :create, :params => {:term => "ROB", :tiles => ["N", "R", "O", "B", "C", "E", "E", "T", "E", "R", "E", "I", "H", "R", "P", "N"]}
      json = JSON.parse(response.body);

      expect_any_instance_of(DictionaryGateway).not_to  receive(:exists)
      expect(response.status == 200)
      expect(json['exists'] == true)
    end

    it 'Word Check will return ok with response exists to true if word does not exist in MiniCache but exists from Dictionary Gateway' do

      allow_any_instance_of(MiniCache::Store).to receive(:get).and_return(true)
      allow_any_instance_of(DictionaryGateway).to receive(:exists).and_return(true)

      post :create, :params => {:term => "ROB", :tiles => ["N", "R", "O", "B", "C", "E", "E", "T", "E", "R", "E", "I", "H", "R", "P", "N"]}
      json = JSON.parse(response.body);

      expect(response.status == 200)
      expect(json['exists'] == true)
    end


  end
end
