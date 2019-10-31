class Homepage extends React.Component {
	render(){
		return (
         <div>
            <p>Hello, welcome to Trading card site!</p><br></br>
            <a href="/cards">Click here to view cards.</a><br/><br/>
            <img src="/static/img/balloonicorn.jpg" />

        </div>
        );    
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));