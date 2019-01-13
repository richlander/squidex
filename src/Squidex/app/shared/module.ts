﻿/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';

import { SqxFrameworkModule } from '@app/framework';

import {
    AppClientsService,
    AppContributorsService,
    AppFormComponent,
    AppLanguagesService,
    AppMustExistGuard,
    AppPatternsService,
    AppRolesService,
    AppsService,
    AppsState,
    AssetComponent,
    AssetPreviewUrlPipe,
    AssetsDialogState,
    AssetsListComponent,
    AssetsSelectorComponent,
    AssetsService,
    AssetsState,
    AssetUrlPipe,
    AuthInterceptor,
    AuthService,
    BackupsService,
    BackupsState,
    ClientsState,
    CommentComponent,
    CommentsComponent,
    CommentsService,
    ContentMustExistGuard,
    ContentsService,
    ContentsState,
    ContributorsState,
    FileIconPipe,
    GeolocationEditorComponent,
    GraphQlService,
    HelpComponent,
    HelpMarkdownPipe,
    HelpService,
    HistoryComponent,
    HistoryListComponent,
    HistoryMessagePipe,
    HistoryService,
    LanguageSelectorComponent,
    LanguagesService,
    LanguagesState,
    LoadAppsGuard,
    LoadLanguagesGuard,
    MarkdownEditorComponent,
    MustBeAuthenticatedGuard,
    MustBeNotAuthenticatedGuard,
    PatternsState,
    PermissionDirective,
    PlansService,
    PlansState,
    RichEditorComponent,
    RolesState,
    RuleEventsState,
    RulesService,
    RulesState,
    SchemaCategoryComponent,
    SchemaMustExistGuard,
    SchemaMustExistPublishedGuard,
    SchemaMustNotBeSingletonGuard,
    SchemasService,
    SchemasState,
    SearchFormComponent,
    UIService,
    UIState,
    UnsetAppGuard,
    UnsetContentGuard,
    UsagesService,
    UserDtoPicture,
    UserIdPicturePipe,
    UserNamePipe,
    UserNameRefPipe,
    UserPicturePipe,
    UserPictureRefPipe,
    UsersProviderService,
    UsersService
} from './declarations';

@NgModule({
    imports: [
        DndModule,
        RouterModule,
        SqxFrameworkModule
    ],
    declarations: [
        AppFormComponent,
        AssetComponent,
        AssetPreviewUrlPipe,
        AssetUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        CommentComponent,
        CommentsComponent,
        FileIconPipe,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        LanguageSelectorComponent,
        MarkdownEditorComponent,
        PermissionDirective,
        SchemaCategoryComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe,
        RichEditorComponent,
        SearchFormComponent
    ],
    exports: [
        AppFormComponent,
        AssetComponent,
        AssetPreviewUrlPipe,
        AssetUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        CommentComponent,
        CommentsComponent,
        FileIconPipe,
        GeolocationEditorComponent,
        HelpComponent,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        LanguageSelectorComponent,
        MarkdownEditorComponent,
        PermissionDirective,
        RouterModule,
        SchemaCategoryComponent,
        SearchFormComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe,
        RichEditorComponent
    ],
    providers: [
        AssetsDialogState
    ]
})
export class SqxSharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SqxSharedModule,
            providers: [
                AppClientsService,
                AppContributorsService,
                AppLanguagesService,
                AppMustExistGuard,
                AppPatternsService,
                AppRolesService,
                AppsService,
                AppsState,
                AssetsState,
                AssetsService,
                AuthService,
                BackupsService,
                BackupsState,
                ClientsState,
                CommentsService,
                ContentMustExistGuard,
                ContentsService,
                ContentsState,
                ContributorsState,
                GraphQlService,
                HelpService,
                HistoryService,
                LanguagesService,
                LanguagesState,
                LoadAppsGuard,
                LoadLanguagesGuard,
                MustBeAuthenticatedGuard,
                MustBeNotAuthenticatedGuard,
                PatternsState,
                PlansService,
                PlansState,
                RolesState,
                RuleEventsState,
                RulesService,
                RulesState,
                SchemaMustExistGuard,
                SchemaMustExistPublishedGuard,
                SchemaMustNotBeSingletonGuard,
                SchemasService,
                SchemasState,
                UIService,
                UIState,
                UnsetAppGuard,
                UnsetContentGuard,
                UsagesService,
                UsersProviderService,
                UsersService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }
            ]
        };
    }
}