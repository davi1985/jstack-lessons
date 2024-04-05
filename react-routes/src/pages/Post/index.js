import React, { useMemo, Component } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// export const Post = () => {
//   const params = useParams();
//   const { search } = useLocation();

//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log({ params, queryParams: queryParams.get('name') });
//   return <h1>Post page</h1>;
// };

export class Post extends Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  handleNavigate = () => {
    this.props.history.push('/posts');
  };

  render() {
    console.log(this.props.match.params);
    console.log(this.props.location.search);

    return (
      <>
        <button onClick={this.handleNavigate}>
          Voltar para a listagem de posts
        </button>

        <h1>Post Page</h1>
      </>
    );
  }
}
