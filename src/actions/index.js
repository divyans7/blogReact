import jasonPlaceholder from '../apis/jasonPlaceholder';


export const fetchPosts = () => async dispatch => {
     
     const response = await jasonPlaceholder.get('/Posts');

     dispatch({  type: 'FETCH_POSTS', payload: response})


          
     };




