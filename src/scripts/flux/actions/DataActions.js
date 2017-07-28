import axios from 'axios';
import alt   from 'flux/alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://api.lewk.io'; // Wordpress installation url

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
        this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media`; // Endpoint for getting Wordpress Media
        this.searchEndPoint = `${appUrl}/wp-json/wp/v2/posts?search=`; // Endpoint for getting Wordpress Search
    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // Method for getting Media data
    getMedia(pages, posts, cb){
        this.api(this.mediaEndPoint).then((response)=>{
            const medias    = response;
            const payload   = { pages, posts, medias }
            this.getSuccess(payload); // Pass returned data to the store
            console.log(payload)
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getPosts(response, cb)
        });
        return true;
    }

    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };
            this.getMedia(pages, posts, cb)
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);
