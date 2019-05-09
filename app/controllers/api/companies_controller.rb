class Api::CompaniesController < ApplicationController
  def index
    render json: Company.all
  end

  def show
    render json: Company.find(params[:id])
  end

  def create
    render json: Company.create(company_params)
  end

  def destroy
    render json: Company.destroy(params[:id])
  end

  def update
    company = Company.find(params['id'])
    company.update(company_params)
    respond_with Company, json: company
  end

  private
  
  def company_params
    params.require(:company).permit(
      :id,
      :name,
      :latitude,
      :longitude
    )
  end
end