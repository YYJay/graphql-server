# apollo-server demo
# start
* npm install
* npm run start
* visit http://localhost:3007/graphiql
* try input
`query {
	 user(username: "chen2@163.com", password: "Mi888888") {
    token
  }
}`

# how to use in react
visit https://codesandbox.io/s/pm777z1r1q
***
## react-apollo介绍
* 特性
	* 轻松管理数据, 只需要一个`<Query>`组件

		````js

		const GET_DOGS = gql`
	  query GetDogs {
	    dogs {
	      id
	      name
	    }
	  }
	`;

	const GoodDogsBrent = () => (
	  <Query query={GET_DOGS}>
	    {({ loading, error, data }) => {
	      if (error) return <Error />
	      if (loading || !data) return <Fetching />

	      return <DogList dogs={data.dogs} />
	    }}
	  </Query>
	)
	````

	* 自带loading error
* 开始
	-  安装依赖
		````
		npm install apollo-boost react-apollo graphql --save
		````
	- 创建客户端
		````
		import gql from "graphql-tag";
		client
		.query({
		  query: gql`
		    {
		      rates(currency: "USD") {
		        currency
		      }
		    }
		  `
		})
  	.then(result => console.log(result));
		````
	- 重新查询 refetch
		````
		const DogPhoto = ({ breed }) => (
	  <Query
	    query={GET_DOG_PHOTO}
	    variables={{ breed }}
	    skip={!breed}
	  >
	    {({ loading, error, data, refetch }) => {
	      if (loading) return null;
	      if (error) return `Error!: ${error}`;

	      return (
	        <div>
	          <img
	            src={data.dog.displayImage}
	            style={{ height: 100, width: 100 }}
	          />
	          <button onClick={() => refetch()}>Refetch!</button>
	        </div>
	      );
	    }}
	  </Query>
		);
		````

	- 手动查询(太冗长, 不建议使用), 使用ApolloConsumer组件并直接调用client.query()。
		````
    <ApolloConsumer>
      {client => (
        <div>
          <button
            onClick={async () => {
              const { data } = await client.query({
                query: GET_DOG_PHOTO,
                variables: { breed: "bulldog" }
              });
              this.onDogFetched(data.dog);
            }}
          >
            Click me!
          </button>
        </div>
      )}
    </ApolloConsumer>
		````
