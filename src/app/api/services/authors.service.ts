/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthorBriefDto } from '../models/author-brief-dto';
import { AuthorDto } from '../models/author-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authorsGet
   */
  static readonly AuthorsGetPath = '/Authors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<AuthorBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AuthorBriefDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsGet$Plain(params?: {

  }): Observable<Array<AuthorBriefDto>> {

    return this.authorsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AuthorBriefDto>>) => r.body as Array<AuthorBriefDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<AuthorBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AuthorBriefDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsGet$Json(params?: {

  }): Observable<Array<AuthorBriefDto>> {

    return this.authorsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AuthorBriefDto>>) => r.body as Array<AuthorBriefDto>)
    );
  }

  /**
   * Path part for operation authorsPost
   */
  static readonly AuthorsPostPath = '/Authors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authorsPost$Response(params?: {
      body?: AuthorDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authorsPost(params?: {
      body?: AuthorDto
  }): Observable<void> {

    return this.authorsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation authorsIdGet
   */
  static readonly AuthorsIdGetPath = '/Authors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<AuthorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthorDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsIdGet$Plain(params: {
    id: number;

  }): Observable<AuthorDto> {

    return this.authorsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthorDto>) => r.body as AuthorDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<AuthorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthorDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsIdGet$Json(params: {
    id: number;

  }): Observable<AuthorDto> {

    return this.authorsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthorDto>) => r.body as AuthorDto)
    );
  }

  /**
   * Path part for operation authorsIdPut
   */
  static readonly AuthorsIdPutPath = '/Authors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authorsIdPut$Response(params: {
    id: number;
      body?: AuthorDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authorsIdPut(params: {
    id: number;
      body?: AuthorDto
  }): Observable<void> {

    return this.authorsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation authorsIdDelete
   */
  static readonly AuthorsIdDeletePath = '/Authors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authorsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorsService.AuthorsIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authorsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authorsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.authorsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
