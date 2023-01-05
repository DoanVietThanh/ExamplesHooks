import { useEffect, useState } from 'react';
import queryString from 'query-string';
import CallApi from '../CallApi';
import ColorBox from '../ColorBox';
import TodoListF8 from '../F8 - TodoList';
import Pagination from '../Pagination';
import PostList from '../PostList';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import FormInput from '../FormInput';
import Register from '../Register/Register';
import PostFiltersForm from '../PostFiltersForm';
import Clock from '../Clock';
import MagicColor from '../MagicColor';
import Content from '../../hooks/Content';

function BaiTap() {
  const [showClock, setShowClock] = useState(true);
  const [postList, setPostList] = useState([]);
  const [callApi, setCallApi] = useState([]);
  const [todos, setTodoList] = useState([
    { id: 1, title: 'Viec lam 1' },
    { id: 2, title: 'Viec lam 2' },
    { id: 3, title: 'Viec lam 3' },
  ]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       // npm i --save query-string : _limit=10&_page=1
  //       const paramsString = queryString.stringify(filters);
  //       const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestURL);
  //       const responseJSON = await response.json();
  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log('Failed to fetch post list: ', error.message);
  //     }
  //   }
  //   fetchPostList();
  // }, [filters]);

  // useEffect(() => {
  //   async function fetchCallApi() {
  //     const requestURL = 'https://jsonplaceholder.typicode.com/users';
  //     const response = await fetch(requestURL);
  //     const responseJSON = await response.json();
  //     setCallApi(responseJSON);
  //   }
  //   fetchCallApi();
  // }, []);

  function handleTodoClick(todo) {
    const index = todos.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  }

  function handleSubmitTodoForm(formValues) {
    const newTodo = {
      id: todos.length + 1,
      ...formValues,
    };
    const newTodoList = [...todos];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handlePageChange(newPage) {
    console.log('newPage :>> ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleSearchFilters(newFilters) {
    console.log('newFilters', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerms,
    });
  }

  return (
    <div className="App">
      <div className="">
        <div className="heading">Bài tập F-Code</div>
        <div style={{ display: 'flex', flex: 1 }}>
          <Register />
          <TodoListF8 />
          <CallApi posts={callApi} />
        </div>
      </div>

      <div className="">
        <div className="heading ">Bài tập F8</div>
        <div>
          <TodoListF8 />
          <Content />
        </div>
      </div>

      <div className="">
        <div className="heading">Bài tập Udemy</div>
        <div>
          {showClock && <Clock />}
          <button onClick={() => setShowClock(!showClock)}>Toggle Show Clock</button>
          <MagicColor />
          <ColorBox />
          TodoList
          <TodoForm onSubmit={handleSubmitTodoForm} />
          <TodoList todos={todos} onTodoClick={handleTodoClick} />
          Search Term
          <PostFiltersForm onSubmit={handleSearchFilters} />
          <PostList posts={postList} />
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export default BaiTap;
