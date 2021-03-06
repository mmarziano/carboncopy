class OrganizationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        organizations = Organization.all
        render json: organizations, only: [:id, :name, :address, :city, :state, :zipcode, :pin]
    end 

    def new
        @organization = Organization.new
    end 

    def create
        organization = Organization.new(organization_params)

        if organization.save
            render json: organization
        else 
            if organization.errors.any?
                render json: organization.errors.full_messages
            end
        end
    end 

    def show
        organization = Organization.find(params[:id])
        render json: organization
    end

    def edit
    end 

    def update 
    end 

    def destroy
    end

    def search
        organization = Organization.query_by_name(params[:name].titlecase)
        if organization
            render json: organization
        else 
            render organization.errors.full_messages
        end
    end 

    def validate
        organization = Organization.find_by(id: params[:organization_id])
        render json: organization
    end 

    private 

    def organization_params
        params.permit(:name, :address, :city, :state, :zipcode, :phone, :billing_email, :audit_email, :pin)
    end 

    
end
