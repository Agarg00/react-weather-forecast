import Card from "./Card";

const CardList = (props) =>{
    return (
        <div style={{'display':'flex','flexDirection':'row'}}>
			{ // eslint-disable-next-line
                props.data['cod'] != 200 
            ? 'loading....' :
            props.data['list'].map(i =>{
             return <Card key={0} i={i} check={props.data} />
            })
			}
		</div>
    );
}

export default CardList;