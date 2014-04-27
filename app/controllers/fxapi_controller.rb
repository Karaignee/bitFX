class FxapiController < ApplicationController

  def show
    #access using /fx_api/usd/2014-04-04
    #replies in JSON with all fx rates since the date for the currency
    our_data = FxRates.for_ccy(params[:ccy]).since(
      params[:since_date] || '2014.04.01' )
    render json: our_data.map{|x| {date: x.value_date, rate: x.rate}}
  end
end
