/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ReviewBriefDto } from '../models/review-brief-dto';
import { ReviewDto } from '../models/review-dto';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation reviewsGet
   */
  static readonly ReviewsGetPath = '/Reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ReviewBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReviewBriefDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reviewsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsGet$Plain(params?: {

  }): Observable<Array<ReviewBriefDto>> {

    return this.reviewsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReviewBriefDto>>) => r.body as Array<ReviewBriefDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ReviewBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReviewBriefDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reviewsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsGet$Json(params?: {

  }): Observable<Array<ReviewBriefDto>> {

    return this.reviewsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReviewBriefDto>>) => r.body as Array<ReviewBriefDto>)
    );
  }

  /**
   * Path part for operation reviewsPost
   */
  static readonly ReviewsPostPath = '/Reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reviewsPost$Response(params?: {
      body?: ReviewDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsPostPath, 'post');
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
   * To access the full response (for headers, for example), `reviewsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reviewsPost(params?: {
      body?: ReviewDto
  }): Observable<void> {

    return this.reviewsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation reviewsIdGet
   */
  static readonly ReviewsIdGetPath = '/Reviews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ReviewDto>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReviewDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reviewsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsIdGet$Plain(params: {
    id: number;

  }): Observable<ReviewDto> {

    return this.reviewsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReviewDto>) => r.body as ReviewDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ReviewDto>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReviewDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reviewsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsIdGet$Json(params: {
    id: number;

  }): Observable<ReviewDto> {

    return this.reviewsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReviewDto>) => r.body as ReviewDto)
    );
  }

  /**
   * Path part for operation reviewsIdPut
   */
  static readonly ReviewsIdPutPath = '/Reviews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reviewsIdPut$Response(params: {
    id: number;
      body?: ReviewDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `reviewsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  reviewsIdPut(params: {
    id: number;
      body?: ReviewDto
  }): Observable<void> {

    return this.reviewsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation reviewsIdDelete
   */
  static readonly ReviewsIdDeletePath = '/Reviews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `reviewsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.reviewsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
