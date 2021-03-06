class ReceiptsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        receipts = Receipt.all 
        render json: receipts
    end 

    def new
        @receipt = Receipt.new
    end 

    def create
        receipt = Receipt.new(receipt_params)

        if receipt.save
            render json: receipt
        else 
            if receipt.errors.any?
                render json: receipt.errors.full_messages
            end
        end
    end 

    def show
        receipt = Receipt.find(params[:id])
        render json: receipt
    end

    def edit
    end 

    def update 
    end 

    def destroy
    end

    private 

    def receipt_params
        params.permit(:name, :email, :phone, :account_id, :description, :category_amt_1, :payment_method, :payment_method_note, :notes, :received_by, :receipt_date, :organization_id)
    end 
end
