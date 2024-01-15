FROM ubuntu:latest

# Update and install dependencies
RUN apt-get update -y && \
  apt-get install -y build-essential curl git

# Nodejs and NPM install
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Ruby install
RUN apt-get install -y ruby-full zlib1g-dev

# Preparing Gem directory
WORKDIR /gems

ENV GEM_HOME="/gems"
ENV PATH="/gems/bin:$PATH"

# Jekyll, Bundler install
RUN gem install jekyll bundler jekyll-postcss

# Project folder
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy Gemfile
COPY Gemfile ./

# set gems local directory
# RUN bundle config --local path 'vendor/bundle'

# npm dependencies install include tailwindcss
RUN npm install tailwindcss postcss autoprefixer

# install Gemfile dependencies
RUN bundle install
# Copy all files project
COPY . .

# Expose port 4000 (port default Jekyll)
EXPOSE 4000 35729 

# Run command
CMD [ "bundle", "exec", "jekyll", "build" ]
