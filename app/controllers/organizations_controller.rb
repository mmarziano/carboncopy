class OrganizationsController < ApplicationController
    def index
        organizations = Organization.all
        render json: organizations
    end 

    def new
        @organization = Organization.new
    end 

    def create
        organization = Organization.new(organization_params)
        if organization.save
            render json: organization
        else 
            render organization.errors.full_messages
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

    private 

    def organization_params
        params.require(:organization).permit(:name, :address_1, :address_2, :city, :state, :zipcode, :phone, :billing_email, :audit_email)
    end 

    
end
