class ReceiptsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        receipts = Receipt.all 
        render json: receipts, only: [:id, :name, :receipt_date, :category_label_1, :category_amt_1, :organization_id]
    end 

    def new
        @receipt = Receipt.new
    end 

    def create
        receipt = Receipt.new(receipt_params)

        if receipt.save
            render json: receipt
        else 
            flash[:alert] = receipt.errors.full_messages if receipt.errors.any?
            redirect_to '/'
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
        params.require(:receipt).permit(:name, :email, :phone, :secondary_name, :secondary_id, :category_label_1, :category_amt_1, :payment_method, :payment_method_note, :notes, :received_by, :receipt_date, :organization_id)
    end 
end
