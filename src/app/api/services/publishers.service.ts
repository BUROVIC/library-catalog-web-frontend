/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PublicationBriefDto } from '../models/publication-brief-dto';
import { PublisherDto } from '../models/publisher-dto';

@Injectable({
  providedIn: 'root',
})
export class PublishersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation publishersGet
   */
  static readonly PublishersGetPath = '/Publishers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PublicationBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PublicationBriefDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `publishersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersGet$Plain(params?: {

  }): Observable<Array<PublicationBriefDto>> {

    return this.publishersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PublicationBriefDto>>) => r.body as Array<PublicationBriefDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PublicationBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PublicationBriefDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `publishersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersGet$Json(params?: {

  }): Observable<Array<PublicationBriefDto>> {

    return this.publishersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PublicationBriefDto>>) => r.body as Array<PublicationBriefDto>)
    );
  }

  /**
   * Path part for operation publishersPost
   */
  static readonly PublishersPostPath = '/Publishers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publishersPost$Response(params?: {
      body?: PublisherDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersPostPath, 'post');
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
   * To access the full response (for headers, for example), `publishersPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publishersPost(params?: {
      body?: PublisherDto
  }): Observable<void> {

    return this.publishersPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation publishersIdGet
   */
  static readonly PublishersIdGetPath = '/Publishers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<PublisherDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PublisherDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `publishersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersIdGet$Plain(params: {
    id: number;

  }): Observable<PublisherDto> {

    return this.publishersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PublisherDto>) => r.body as PublisherDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<PublisherDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PublisherDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `publishersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersIdGet$Json(params: {
    id: number;

  }): Observable<PublisherDto> {

    return this.publishersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PublisherDto>) => r.body as PublisherDto)
    );
  }

  /**
   * Path part for operation publishersIdPut
   */
  static readonly PublishersIdPutPath = '/Publishers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publishersIdPut$Response(params: {
    id: number;
      body?: PublisherDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `publishersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publishersIdPut(params: {
    id: number;
      body?: PublisherDto
  }): Observable<void> {

    return this.publishersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation publishersIdDelete
   */
  static readonly PublishersIdDeletePath = '/Publishers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublishersService.PublishersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `publishersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishersIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.publishersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
