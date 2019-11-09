class WelcomeController < ApplicationController
    def index 
        respond_to do |format|
            format.html { render :index }
            format.json { render json: receipts_url }
        end
    end
end
