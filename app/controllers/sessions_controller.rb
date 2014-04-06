class SessionsController < ApplicationController

  def new
  end	

  def create
  	user = User.find_by_email(params[:email]) #find user by email used on session login
  	if user && user.authenticate(params[:password]) #the authenticate based on the password
  	  sign_in user 		#Sign the user in and redirect to the user's show page
  	  redirect_back_or user
  	else
  	  flash.now[:error] = 'Invalid email/password combination'
  	  render 'new'
  	end 	
  end

  def destroy
    sign_out 
    redirect_to root_path
  end

end
