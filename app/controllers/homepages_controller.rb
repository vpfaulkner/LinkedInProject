class HomepagesController < ApplicationController

  # def index
  #   root_uri = 'https://api.github.com'
  #   # account_key = ENV['AZURE_KEY']
  #   uri = URI(root_uri)
  #   get_params = {}
  #   uri.query = URI.encode_www_form(get_params)
  #
  #   req = Net::HTTP::Get.new(uri)
  #   req.basic_auth account_key, account_key
  #
  #   res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |https|
  #     https.request(req)
  #   end
  #
  #   render :json => res.body
  # end

end
