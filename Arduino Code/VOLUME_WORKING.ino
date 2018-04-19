#include <SPI.h>
#include <Ethernet.h>
#include <PubNub.h>

byte mac[] = {0x00, 0x0E, 0xEF, 0x00, 0x00, 0x69};

const int pubLedPin = 9;

char pubkey[] = "pub-c-47dade9e-8394-4adc-9f0d-669e94d10a08";
char subkey[] = "sub-c-67756fce-415f-11e8-8bb7-3ab51ec5ed79";
char channel[] = "ArdChannel";


int pin = 2;
volatile unsigned int pulse;
float volume = 0;
char CharVolume [10];
float flow_rate =0;
const int pulses_per_litre = 450;  //  1 pulse approximately equals to [1000 ml/450 pulses] 2.22 ml. These values can be different depending on the speed of the water flow and the mounting polarity
float prevV = -1;

void setup()
{
     Serial.begin(9600);  // Sets the data rate in bits per second (baud) for serial data transmission.
     pinMode(pin, INPUT);
     attachInterrupt(0, count_pulse, RISING); // attachInterrupt is associating a hardware interrupt with a function and a trigger event.


     while(!Ethernet.begin(mac)) {
    Serial.println("Ethernet setup error!");
    delay(1000); 
  }
    Serial.println("Ethernet set up");
    PubNub.begin(pubkey,subkey);
    Serial.println("Pubnub set up");
  }


void loop()
{

    Ethernet.maintain();
    EthernetClient *client;

  char msg[64] = "{\"millC\":[";

//  strcat(msg, "]}");

  

  
    pulse=0;
    interrupts();
    
    delay(100); //reduce to 100 will get better result.

    
    noInterrupts();//disables the interrupts, allows certains tasks to happen in the background and they are enabled by default.
    
//    Serial.print("Pulses per second: ");
//   Serial.println(pulse);
    
    flow_rate = pulse * 1000/pulses_per_litre; //Display ml is easier for readers during test
    
//    Serial.print("Water flow rate: "); // prints out the numbers which are coming from the data, so the water flow rate will be shown
//    Serial.print(flow_rate); // prints out the numbers which are coming from the data, so the flow rate will be shown on the screen
//    Serial.println(" milliliters per second"); // prints out the numbers which are coming from the data, in this case, the millitres per second
    
    volume = volume + flow_rate * 0.015; //Time Interval is 0.1 second   //need to change this depending on flowrate through bottle
    //volume = volume * 10;

    Serial.print("Volume: ");
    Serial.print(volume * 100);
    Serial.println("milliliters");
    
    //char msg[64] = "{\"Milliliters Consumed\":[";
    dtostrf(volume * 100, 4, 2, CharVolume);
    sprintf(msg + strlen(msg), "%s", CharVolume);  //convert float to char in order to display in pubnub
    strcat(msg, "]}");

 
  if (volume != prevV){
    client = PubNub.publish(channel, msg);  //print msg to client in order to display on web page
  Serial.println("publish");
  if(!client) {
    Serial.println("publishing error");
  } else {
    Serial.println("published");
    client->stop();
  }
  prevV = volume;  //if prevV is equal to volume do not print lines out on react
}
//  delay(1000);
}

void count_pulse()
{
    pulse++;
}




