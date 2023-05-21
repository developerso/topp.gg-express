const axios = require('axios');

const discordWebhookURL = 'https://discord.com/api/webhooks/1109876216607019028/_e0pCaR7tr9v0uqAsUx1J6aciwZnCkWjthzHeZF274T3gaRNqEaM3Nsq_rdOlvgz9EI_';

// Function to send the embed message to Discord
async function sendDiscordEmbed(username) {
  try {
    const embed = {
      title: 'New Vote on top.gg',
      description: `User **${username}** has voted on top.gg!`,
      color: 0x00ff00, // Green color
    };

    const data = {
      embeds: [embed],
    };

    await axios.post(discordWebhookURL, data);
    console.log('Discord embed sent successfully!');
  } catch (error) {
    console.error('Error sending Discord embed:', error);
  }
}


const express = require("express");
const Topgg = require("@top-gg/sdk");

const app = express(); // Your express app

const webhook = new Topgg.Webhook("123"); // add your Top.gg webhook authorization (not bot token)

app.post(
  "/dblwebhook",
  webhook.listener((vote) => {
    console.log(vote); // 221221226561929217
    sendDiscordEmbed(vote.user);
  })
); // attach the middleware

app.listen(3000); // your port
