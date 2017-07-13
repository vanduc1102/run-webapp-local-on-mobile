# run-webapp-local-on-mobile
Tutorial to run local web application on PC - dev env to mobile devices

## Webapp can run with your LAN address

This case is very simple, just need to connect your mobile devices to the same network as your PC.

## Webapp can not run with your LAN address

There is many solutions for this, you can try out some of below:

### 1. Use `brower-sync`


Use `browser-sync-sol` folder
A simple solution but works on both Android and iOS

Command: `gulp`

Or
` browser-sync start -p http://local.dev `

### 2. Use transparent proxy with [Filternet](https://github.com/vanduc1102/filternet)

Pros: Very fast
Cons: Not working in newer version of iOS, and need to change proxy to make.

## Run Webapp outside of LAN

[ngRok](https://ngrok.com/): a solution to run your webapp outside of LAN.

[localtunnel.me](https://localtunnel.github.io/www/) NodeJS solution.
