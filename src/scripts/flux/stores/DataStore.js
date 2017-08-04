import alt          from 'flux/alt/Alt.js';
import DataActions  from 'flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getAllMedia:    this.getAllMedia,
            getPageBySlug:  this.getPageBySlug,
            getPostBySlug:  this.getPostBySlug,
            getMediaById:   this.getMediaById
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() {
        return this.getState().data;
    }

    // Returns all Pages
    getAllPages() {
        return this.getState().data.pages;
    }

    // Returns all Posts
    getAllPosts() {
        return this.getState().data.posts;
    }

    getAllMedia() {
        return this.getState().data.media;
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    // Returns a Post by provided slug
    getPostBySlug(slug){
        const pages = this.getState().data.posts;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    // Returns a Post by provided slug
    getMediaById(id){
        const medias = this.getState().data.medias;
        return medias[Object.keys(medias).find((media, i) => {
            return medias[media].id === id;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');
