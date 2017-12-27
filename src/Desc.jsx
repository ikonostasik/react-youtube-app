import React from 'react';

export default (props) => (
		<div>
			<h4 id="stas">
				<b>Название:</b> {props.title}
			</h4>
			<p> 
				<b>Описание:</b> {props.description}
			</p>
			<p> 
				<b>Опубликованно:</b> {props.publishedAt}
			</p>
		</div>
		)
		