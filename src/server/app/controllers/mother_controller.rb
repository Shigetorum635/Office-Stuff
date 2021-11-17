class MotherController < ApplicationController
  def index
    render :json => {
      "your mother" => "Fat",
      "you" => "idiot",
      "her" => "aids"
    }
  end
end
