class ErbTestController < ApplicationController
  def show
    @from_request = "Got this from the request: #{params[:foo]}"
  end
end
