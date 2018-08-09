## SldRX: Slide Reactions

HTML/JS Widget to add user reactions to any online presentation/page


### Usage

The widget has 2 modes of operation: master or client. The master shows the total count of every reaction updated in real time with bubbling up effects, while the client allows to create the reactions by showing a button bar.

To setup the widget you need to first create a Firebase realtime database [documentation](https://firebase.google.com/docs/database/)

After your database is created add the corresponding snippet to your HTML (is possible to use both at the same time):


#### Master
```
  <div data-widget-sldrx="master">
    <script type="text/props">
      {
        "apiKey": "YOUR FIREBASE API KEY",
        "databaseURL": "YOUR FIREBASE REALTIME DB URL"
      }
    </script>
    <script defer src="https://unpkg.com/sldrx"></script>
  </div>
```


#### Client
```
  <div data-widget-sldrx="client">
    <script type="text/props">
      {
        "apiKey": "YOUR FIREBASE API KEY",
        "databaseURL": "YOUR FIREBASE REALTIME DB URL"
      }
    </script>
  </div>
  <script defer src="https://unpkg.com/sldrx"></script>
```


#### Customizing the widget
The following additional props can be passed to customize the widget:

#### emojis

> "emojis": ["🦄", "🤯", "❤️", "🤔"]

If not passed emojis used for the reactions are: 👍, 🤔 and 😡. 

#### fontSize

> "fontSize": "20px"

The default font size is 30px

#### url
> "url": "http://google.co"

The text to display on the bottom left corner of the widget. By default it displays 'SldRX'
