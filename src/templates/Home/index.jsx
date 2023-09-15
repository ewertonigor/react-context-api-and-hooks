import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
    state = {
      posts: [],
      AllPosts: [],
      page: 0,
      postsPerPage: 2,
      searchValue: ''
    };
    
  async componentDidMount() { // Montagem
      await this.loadPosts();
    }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
      const postsAndPhotos = await loadPosts();
      this.setState({ 
        posts: postsAndPhotos.slice(page, postsPerPage),
        allPosts: postsAndPhotos,
       });
    }

  loadMorePostss = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }
    
  render() {
    const{ posts, allPosts, searchValue } = this.state; // Atribuição via desestruturação.
    const noMorePosts = posts.length >= 99

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
      <section className='container'>
        <div className="search-container">
        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}
        
        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts com este titulo.</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button 
              text="Load more posts"
              onClick={this.loadMorePostss}
              disabled={noMorePosts}
            /> 
          )}
        </div>
      </section>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
