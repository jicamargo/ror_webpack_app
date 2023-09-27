class Api::GreetingsController < ApplicationController
  def random_greeting
    random_message = Message.order('RANDOM()').first
    if random_message
      render json: { text: random_message.text }
    else
      render json: { error: 'No greetings available' }, status: :not_found
    end
  end
end
