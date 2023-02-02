# davincifren

a smol applicatio to give you a nice openai davinci chatbot on discord

## deployment prereqs

### openai

1. log in
2. get api token
3. set up billing and payment
4. set a hard and soft limit for api charges

### discord

1. go to the discord dev portal
2. make a discord bot and get a token over at the discord dev portal. make sure to enable `Privileged Gateway Intents > MESSAGE CONTENT INTENT`
3. in `OAuth2 > URL Generator` choose `bot` for `scopes` and `Read Messages/View Channels`, `Send Messages`, and `Read Message History` under `Text Permissions`.
    1. use the generated URL and add this bad puppy to yo server

### if using akash

1. cloudmos deploy is recommended. download it
2. make a wallet with keplr
3. get AKT on any CEX it is listed on or use Osmosis if you already do Cosmos stuff


## deployment

### docker

1. Create a `.env` file in the root of this project.
    1. You put your secrets in there, man... see the example `.env.example`
2. build with `docker build -t davincifren .`
3. run with `docker run davincifren`

### akash

1. copy and paste the SDL into cloudmos deploy, use 5 AKT for escrow to deploy and choose a provider
2. you should be all good