import React from 'react';
import https from 'https';

import Player from './Player';
import Input from './Input';
import Reccomend from './Reccomend';
import Desc from './Desc';

let data = '';
class App extends React.Component {
	 constructor(props) {
		  super(props);
		  this.state = {
		    data: { 
		    "kind": "youtube#searchListResponse", "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/825OvAjdFFz6YUAWCqGZK2AzOhs\"", "nextPageToken": "CAUQAA", "regionCode": "RU", "pageInfo": { "totalResults": 1000000, "resultsPerPage": 5 }, "items": [ { "kind": "youtube#searchResult", "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/3kT86p44VP-m7XbdgQ0KMt9NJkI\"", "id": { "kind": "youtube#video", "videoId": "CLXt3yh2g0s" }, "snippet": { "publishedAt": "2011-04-21T15:29:31.000Z", "channelId": "UCnW6K9iOXQ6VJVisrlnQ3VA", "title": "Example - 'Changed The Way You Kiss Me' (Official Video)", "description": "Subscribe for more: http://po.st/SUBSCRIBE Download the 'The Evolution Of Man' (Out Now): iTunes: http://bit.ly/EVOLUTION-MAN HMV: http://bit.ly/evolution-man-hmvcd Play: http://bit.ly/evolution-...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/CLXt3yh2g0s/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/CLXt3yh2g0s/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/CLXt3yh2g0s/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "datarecordsuk", "liveBroadcastContent": "none" } }, { "kind": "youtube#searchResult", "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/ryGugnqDzLGK0MNkt3X6rLfzP_M\"", "id": { "kind": "youtube#channel", "channelId": "UC736ropsqGan0ezGMQDx-Zg" }, "snippet": { "publishedAt": "2006-01-06T04:34:15.000Z", "channelId": "UC736ropsqGan0ezGMQDx-Zg", "title": "Example", "description": "The official Example YouTube channel for all music videos and behind the scenes action. Follow Example on Facebook, Twitter and Instagram on the links below.", "thumbnails": { "default": { "url": "https://yt3.ggpht.com/-MLdEYEUKXyE/AAAAAAAAAAI/AAAAAAAAAAA/fiPeg2cFKzY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" }, "medium": { "url": "https://yt3.ggpht.com/-MLdEYEUKXyE/AAAAAAAAAAI/AAAAAAAAAAA/fiPeg2cFKzY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg" }, "high": { "url": "https://yt3.ggpht.com/-MLdEYEUKXyE/AAAAAAAAAAI/AAAAAAAAAAA/fiPeg2cFKzY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg" } }, "channelTitle": "Example", "liveBroadcastContent": "none" } }, { "kind": "youtube#searchResult", "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/WOmkA1Z18GwNN-uHd4k5ijIsFRM\"", "id": { "kind": "youtube#video", "videoId": "iwYGi7YG4Js" }, "snippet": { "publishedAt": "2011-10-21T08:38:14.000Z", "channelId": "UC736ropsqGan0ezGMQDx-Zg", "title": "Example - 'Midnight Run' (Official Video)", "description": "Download Example's new single 'Perfect Replacement' on iTunes (Out Now): http://www.smarturl.it/PERFECTREPLACEMENT Download the new album 'The Evolution Of Man' (Out Now): iTunes: http://bit.ly/EV...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/iwYGi7YG4Js/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/iwYGi7YG4Js/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/iwYGi7YG4Js/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Example", "liveBroadcastContent": "none" } }, { "kind": "youtube#searchResult", "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/ufG785aG2YdWtffpjxOhJZ5OH1I\"", "id": { "kind": "youtube#video", "videoId": "T9yGcKlYAiw" }, "snippet": { "publishedAt": "2010-04-29T18:51:01.000Z", "channelId": "UCnW6K9iOXQ6VJVisrlnQ3VA", "title": "Example - 'Kickstarts' (Official Video)", "description": "Subscribe for more: http://po.st/SUBSCRIBE Download the new album 'The Evolution Of Man' (Out Now): iTunes: http://bit.ly/EVOLUTION-MAN HMV: http://bit.ly/evolution-man-hmvcd Play: http://bit.ly/...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/T9yGcKlYAiw/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/T9yGcKlYAiw/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/T9yGcKlYAiw/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "datarecordsuk", "liveBroadcastContent": "none" } }, { "kind": "youtube#searchResult", "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/yMt4RmQejbqMer59KO5y0Q72vPM\"", "id": { "kind": "youtube#video", "videoId": "f5CcOq8UzkI" }, "snippet": { "publishedAt": "2011-07-18T16:27:05.000Z", "channelId": "UC736ropsqGan0ezGMQDx-Zg", "title": "Example - 'Stay Awake' (Official Video)", "description": "Download Example's new single 'Perfect Replacement' on iTunes (Out Now): http://www.smarturl.it/PERFECTREPLACEMENT Download the new album 'The Evolution Of Man' (Out Now): iTunes: http://bit.ly/EV...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/f5CcOq8UzkI/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/f5CcOq8UzkI/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/f5CcOq8UzkI/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Example", "liveBroadcastContent": "none" } } ] },
		    'video':'https://www.youtube.com/embed/CRRlbzzt3VA',
		    'title': 'Название',
			'description':'Описание',
			'publishedAt':'1970-01-01'
		  };
	};  
	reccomendClickHandler = function(el) {
		let temp = this.state.data.items[el.target.id].snippet;
		this.setState(
					{
						'video':'https://www.youtube.com/embed/'+el.target.className,
						'title': temp.title,
						'description':temp.description,
						'publishedAt':temp.publishedAt

					}
				)
	}
	inputClickHandler = function(event) {
			event = event || window.event;
			if ((event.keyCode == 0xA)||(event.keyCode == 0xD)) {
				 	https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+event.target.value+'&key=<YOUR_API_KEY>', (resp) => {
				 let data = '';
				  resp.on('data', (chunk) => {
				    data += chunk;
				  });
				  // The whole response has been received. Print out the result.
				  resp.on('end', () => {
				    data = JSON.parse(data);
				    this.setState({
                    	data: data
                	});
				    console.log(data)
				  });
				}).on("error", (err) => {
				  console.log("Error: " + err.message);
				});
			 }  
	};	

	  render() {
		    return (
		      <div>	
		      		<div className="inputBox">
		      		<h2>YouStas - Найдется Все! </h2>
		      			<Input keyUpEvent={this.inputClickHandler.bind(this)} />
		      		</div>
		      		<div className="col-lg-12 box">
		      			<div className="player col-lg-5 pull-left">
				        	<Player video={this.state.video} />
				        </div>

				        <div className="reccomended col-lg-3 ">
				         	{
				         		this.state.data.items.map(function(el,num){
				         			return (
				         				<Reccomend 
				         					id={num}
				         					videoURI={el.id.videoId} 
				         					clickHandler={this.reccomendClickHandler.bind(this)} 
				         					source={el.snippet.thumbnails.medium.url}  
				         				/>
				         			)
				         		}.bind(this))
				         	}     
				         </div>	
				  		
				         <div className="col-md-7 Desc">
				         	<Desc 
				         		title={this.state.title}
				         		description={this.state.description}
				         		publishedAt={this.state.publishedAt}
				         	/>
				         </div>
				    </div>
		       </div>);
		    
  }
}
export default App;