/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
   * Path part for operation reviewsPublicationIdGet
   */
  static readonly ReviewsPublicationIdGetPath = '/Reviews/{publicationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsPublicationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsPublicationIdGet$Plain$Response(params: {
    publicationId: number;

  }): Observable<StrictHttpResponse<Array<ReviewDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsPublicationIdGetPath, 'get');
    if (params) {

      rb.path('publicationId', params.publicationId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReviewDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reviewsPublicationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsPublicationIdGet$Plain(params: {
    publicationId: number;

  }): Observable<Array<ReviewDto>> {

    return this.reviewsPublicationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReviewDto>>) => r.body as Array<ReviewDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reviewsPublicationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsPublicationIdGet$Json$Response(params: {
    publicationId: number;

  }): Observable<StrictHttpResponse<Array<ReviewDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewsService.ReviewsPublicationIdGetPath, 'get');
    if (params) {

      rb.path('publicationId', params.publicationId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReviewDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reviewsPublicationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reviewsPublicationIdGet$Json(params: {
    publicationId: number;

  }): Observable<Array<ReviewDto>> {

    return this.reviewsPublicationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReviewDto>>) => r.body as Array<ReviewDto>)
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
