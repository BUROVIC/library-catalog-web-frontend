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
import { PublicationDto } from '../models/publication-dto';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation publicationsGet
   */
  static readonly PublicationsGetPath = '/Publications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PublicationBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsGetPath, 'get');
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
   * To access the full response (for headers, for example), `publicationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsGet$Plain(params?: {

  }): Observable<Array<PublicationBriefDto>> {

    return this.publicationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PublicationBriefDto>>) => r.body as Array<PublicationBriefDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PublicationBriefDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsGetPath, 'get');
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
   * To access the full response (for headers, for example), `publicationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsGet$Json(params?: {

  }): Observable<Array<PublicationBriefDto>> {

    return this.publicationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PublicationBriefDto>>) => r.body as Array<PublicationBriefDto>)
    );
  }

  /**
   * Path part for operation publicationsPost
   */
  static readonly PublicationsPostPath = '/Publications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publicationsPost$Response(params?: {
      body?: PublicationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsPostPath, 'post');
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
   * To access the full response (for headers, for example), `publicationsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publicationsPost(params?: {
      body?: PublicationDto
  }): Observable<void> {

    return this.publicationsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation publicationsIdGet
   */
  static readonly PublicationsIdGetPath = '/Publications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<PublicationDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PublicationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `publicationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsIdGet$Plain(params: {
    id: number;

  }): Observable<PublicationDto> {

    return this.publicationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PublicationDto>) => r.body as PublicationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<PublicationDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PublicationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `publicationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsIdGet$Json(params: {
    id: number;

  }): Observable<PublicationDto> {

    return this.publicationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PublicationDto>) => r.body as PublicationDto)
    );
  }

  /**
   * Path part for operation publicationsIdPut
   */
  static readonly PublicationsIdPutPath = '/Publications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publicationsIdPut$Response(params: {
    id: number;
      body?: PublicationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `publicationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  publicationsIdPut(params: {
    id: number;
      body?: PublicationDto
  }): Observable<void> {

    return this.publicationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation publicationsIdDelete
   */
  static readonly PublicationsIdDeletePath = '/Publications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publicationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublicationsService.PublicationsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `publicationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publicationsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.publicationsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
