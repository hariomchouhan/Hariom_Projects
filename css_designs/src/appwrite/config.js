import conf from "../conf/conf";
import { Client, Databases, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
    }

    async getPosts({ category } = {}) {
        console.log(conf.appwriteUrl);
        try {
            // Create the base queries array
            let queries = [];

            // Add category filter
            if (category) {
                queries.push(Query.equal("category", category));
            }

            // Fetch and return the documents
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error);
            return false;
        }
    }
}

const service = new Service()

export default service;