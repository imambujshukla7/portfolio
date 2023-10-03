import { sanityKey } from "$lib/constant";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "tg81xdg5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-23",
});

export const sanityQuery = `*[_type == "portfolio" ]{
    tagline,
    title,
      titleDesc,
      about,
      aboutMedia [] {
         "link" :  asset -> url
      },
      socialLinks,
      "favicon" : favicon.asset -> url,
      "logo" : logo.asset -> url,
  
      projectList [] ->
        {
      name,
      desc,
      tech,
      "image" : image.asset ->url,
      link
    },
  
       podcastList[] -> {
      name,
      desc,
      "image" : image.asset ->url,
      link
    },
  
       achivementList[] -> {
      name,
      desc,
      "image" : image.asset ->url,
      link,
      publishedAt
  
    },
  
           skillList[] -> {
      name,
      "image" : image.asset ->url,
      iconList,
      
  
    },
      educationList[] -> {
        title,
        "image" : image.asset ->url,
        desc
      },
  
      expList[] -> {
         title,
      desc,
      "image" : image.asset ->url,
      link,
        role
      },

      articleList[] -> {
        name,
        link,
        publishedAt
      },
    
         blogList[] -> {
             name,
         
          "image" : image.asset ->url,
          link,
           
          },
      
      
  
      
      
  }`;
