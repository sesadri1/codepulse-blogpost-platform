import { inject, Injectable, InputSignal } from '@angular/core';
import { AddBlogPostRequest, BlogPost, UpdateBlogPostRequest } from '../models/blogpost.model';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { BlogpostList } from '../blogpost-list/blogpost-list';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  http = inject(HttpClient);
  apiBaseUrl = environment.apiBaseUrl;
  // Method to create Blog Post
  createBlogPost(data: AddBlogPostRequest): Observable<BlogPost>{
    return this.http.post<BlogPost>(`${this.apiBaseUrl}/api/blogposts`, data);
  }
  // Method to fetch all the Blog Posts
  getAllBlogPosts(): HttpResourceRef<BlogPost[] | undefined>{
    return httpResource<BlogPost[]>(() => `${this.apiBaseUrl}/api/blogposts`);
  }
  // Method to fetch Blog Posts by id
  getBlogPostById(id: InputSignal<string | undefined>): HttpResourceRef<BlogPost | undefined>{
   return httpResource<BlogPost>(() => `${this.apiBaseUrl}/api/blogposts/${id()}`);
  }
  // Method to fetch Blog Posts by id
  editBlogpost(id: string, body: UpdateBlogPostRequest): Observable<BlogPost> {
   return this.http.put<BlogPost>('${this.apiBaseUrl}/api/blogposts/${id}', body);
  }
  // Method to delete Blog Posts by id
  deleteBlogPost(id: string): Observable<BlogPost>{
   return this.http.delete<BlogPost>(`${this.apiBaseUrl}/api/blogposts/${id}`);
  }


}
