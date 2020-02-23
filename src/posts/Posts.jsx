import React, { Component } from 'react';
import {list, hasImage} from './apiPost';
import logo from '../logo.svg';
import '../App.css';
import {Link} from 'react-router-dom';
import {isAuthenticated} from '../auth';
//import defaultImage from '../images/no-image.jpg';
import InfiniteScroll from 'react-infinite-scroller';
//import socket from '../core/Socket';
import moment from 'moment-timezone';
import TimeAgo from 'timeago-react'
import * as timeago from 'timeago.js';
import es from 'timeago.js/lib/lang/es';


 class Posts extends Component {

    constructor(){
        super();
        this.state ={
            posts:[]
        }
  
    }

    componentDidMount = ()=>{
        /*
        socket.on("connect",() =>{
            console.log("Socket  all posts listo");
        })

        socket.on("new:post", (data) =>{
            console.log("new post from user: ", data.user);
            const token = isAuthenticated().token;
                    list(token).then(data =>{
                        if(data.error){
                            console.log(data.error);
                        }else{
                            this.setState({posts: data});
                        }
                    })
        });

        socket.on("new:comment", (data) =>{
            console.log("new comment on post : ", data.postId);
            const token = isAuthenticated().token;
                    list(token).then(data =>{
                        if(data.error){
                            console.log(data.error);
                        }else{
                            this.setState({posts: data});
                        }
                    })
        });
        socket.on("new:like", (data) =>{
            console.log("new like on post: ", data.postId);
            const token = isAuthenticated().token;
                    list(token).then(data =>{
                        if(data.error){
                            console.log(data.error);
                        }else{
                            this.setState({posts: data});
                        }
                    })
        });
        */

      timeago.register('es',es);

        const token = isAuthenticated().token;
        list(token).then(data =>{
            if(data.error){
                console.log(data.error);
            }else{
                this.setState({posts: data});
            }
        })
    }

    loadMore() {
        if(this.state.items===200){
          
          this.setState({ hasMoreItems: false});
        }else{
            setTimeout(() => {
            this.setState({ items: this.state.items + 20});
        }, 2000);
        }
        
      }


      renderPosts = (posts)=>{
        const styles = {
            image:{
                height:"300px",
                border: "3px solid black",
                width:"auto"
            },
            avatar:{
                height:"50px",
                width: "auto",
                borderRadius:"50%",
                border:"2px solid black",
                float: "left",
                marginRight: "5px"
            },
            div_avatar:{
                display:"block"
            },
            separador:{
                border: "2px dashed black"

            },
            withoutMargin :{
                marginTop:"0px"
            }
        }
        return (
             <>
             {posts.map((post, i)=>{
             
                 const posterId = post.postedBy ? `/user/${post.postedBy._id}` : `/post/all`;
                 const posterName = post.postedBy ? post.postedBy.name : " Unknow";
                 const posterPureId = post.postedBy._id;
                 //console.log(posterId);
               
                 return (
                     <>
                     <div className="row mb-3">
                         <hr style={styles.separador}/>
                     <div className="container-fluid">



                   <div className="col-md-12 m-2" style={styles.div_avatar}>
                        <div className="row">
                            <div className="container-fluid">
                                <div className="col-md-4">
                                    <img style={styles.avatar} src={`${process.env.REACT_APP_API_URL}/user/photo/${posterPureId}`} onError={i =>(i.target.src = `${logo}`)} alt="UserIcon"/>
                            <Link to={`${posterId}`} >{posterName}{"  "}</Link> <i class="zmdi zmdi-caret-right-circle"></i>
                            <div>
                            <TimeAgo
                                datetime={post.created} 
                                locale='es'
                            />
                            </div>
                                </div>
                                <div className="col-md-8">
                                    <h3 style ={styles.withoutMargin} >  {post.title}</h3>
                                
                                </div>
                                
                            </div>
                        </div>

                   </div>
                   <div className="col-md-12 m-2">
                    <div className="row mt-5">
                        <div className="container-fluid">
                            <div className="col-md-12">




                                <span>
                                {post.body}
                                </span>
                            
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-fluid">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                            {post.photo && (
                                 <>
                                 <Link to={post._id} >
                                 <img id={`img${i}`} className="card-img-top"  src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`} onError={i=> i.target.src = `${logo}` } alt="Sin imagen" style={styles.image}  />
                                 </Link>
                                 </>
                             )}
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container-fluid">
                            <div className="col-md-12">
                            <h5>{`${post.likes.length} likes , ${post.comments.length} comments`}</h5>
                           {console.log(`likes post ${i} , ${post.title} : `, post.likes)}
                           {console.log(`comments post ${i} , ${post.title} : `, post.comments)}
                           <Link to={`/post/${post._id}`} className="btn btn-raised btn-primary btn-sm">Read more</Link>
                            </div>
                        </div>
                    </div>
                    
                   </div>
                 
                    </div>
                    </div>
               </>
             )}
             )
             }
             </>
             
         )
         }

    render() {
        const {posts} = this.state;

        return (
            <>
            <div className="container-fluid" style={{marginTop:"0px"}}>
                <h2 className="mt-2 mb-2">{!posts.length ? "Loading ..." : "Recent Posts"}</h2>
                <div className="col-md-12" style={{height:'600px', overflow:'auto'}}>
                <InfiniteScroll
                        loadMore={this.loadMore.bind(this)}
                        hasMore={false}
                        loader={<div className="loader"> Loading... </div>}
                        useWindow={false}
                    >
               {this.renderPosts(posts)}

                    </InfiniteScroll>
                </div>
                
               
            </div>

            </>
        )
    }
}



export default Posts;