'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">second documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-90ca3d06bb1028b9691046f851c695f256da240e6a595f696e44e41519ed277f543fac677d6f0a72528fdf0ee16f1f137bce1e8f23f47ddfc241eb95af1d264e"' : 'data-target="#xs-components-links-module-AdminModule-90ca3d06bb1028b9691046f851c695f256da240e6a595f696e44e41519ed277f543fac677d6f0a72528fdf0ee16f1f137bce1e8f23f47ddfc241eb95af1d264e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-90ca3d06bb1028b9691046f851c695f256da240e6a595f696e44e41519ed277f543fac677d6f0a72528fdf0ee16f1f137bce1e8f23f47ddfc241eb95af1d264e"' :
                                            'id="xs-components-links-module-AdminModule-90ca3d06bb1028b9691046f851c695f256da240e6a595f696e44e41519ed277f543fac677d6f0a72528fdf0ee16f1f137bce1e8f23f47ddfc241eb95af1d264e"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AsidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsidemenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cdc6e892fe31676d288bac0200a3273f984015e5a51a0974bc2ae3dbc242301880f34caeffc6b8093ea2c3d65e0c1b24058f0865fa01eccf5d698cdefc4fac1a"' : 'data-target="#xs-components-links-module-AppModule-cdc6e892fe31676d288bac0200a3273f984015e5a51a0974bc2ae3dbc242301880f34caeffc6b8093ea2c3d65e0c1b24058f0865fa01eccf5d698cdefc4fac1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cdc6e892fe31676d288bac0200a3273f984015e5a51a0974bc2ae3dbc242301880f34caeffc6b8093ea2c3d65e0c1b24058f0865fa01eccf5d698cdefc4fac1a"' :
                                            'id="xs-components-links-module-AppModule-cdc6e892fe31676d288bac0200a3273f984015e5a51a0974bc2ae3dbc242301880f34caeffc6b8093ea2c3d65e0c1b24058f0865fa01eccf5d698cdefc4fac1a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-5bc322aea7dc610b9c153920a296fec61990b756f0740d0b4f9e82c52770531e405293010a2710be28319105d24aaaa1f60aac9e9d419be15876c5b3f94114b2"' : 'data-target="#xs-components-links-module-AuthModule-5bc322aea7dc610b9c153920a296fec61990b756f0740d0b4f9e82c52770531e405293010a2710be28319105d24aaaa1f60aac9e9d419be15876c5b3f94114b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-5bc322aea7dc610b9c153920a296fec61990b756f0740d0b4f9e82c52770531e405293010a2710be28319105d24aaaa1f60aac9e9d419be15876c5b3f94114b2"' :
                                            'id="xs-components-links-module-AuthModule-5bc322aea7dc610b9c153920a296fec61990b756f0740d0b4f9e82c52770531e405293010a2710be28319105d24aaaa1f60aac9e9d419be15876c5b3f94114b2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailModule.html" data-type="entity-link" >CocktailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CocktailModule-93ac4c85fa6004b27fc82978f3696b1a054ff0f19bb28fe0227ce921b30f195c3396fcc89942afd541bd2e65a77c2e4d975b58965f36550188212fdcc965bcb3"' : 'data-target="#xs-components-links-module-CocktailModule-93ac4c85fa6004b27fc82978f3696b1a054ff0f19bb28fe0227ce921b30f195c3396fcc89942afd541bd2e65a77c2e4d975b58965f36550188212fdcc965bcb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CocktailModule-93ac4c85fa6004b27fc82978f3696b1a054ff0f19bb28fe0227ce921b30f195c3396fcc89942afd541bd2e65a77c2e4d975b58965f36550188212fdcc965bcb3"' :
                                            'id="xs-components-links-module-CocktailModule-93ac4c85fa6004b27fc82978f3696b1a054ff0f19bb28fe0227ce921b30f195c3396fcc89942afd541bd2e65a77c2e4d975b58965f36550188212fdcc965bcb3"' }>
                                            <li class="link">
                                                <a href="components/CAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailRoutingModule.html" data-type="entity-link" >CocktailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-0d2779fe472183b7e364907fd9fce49742ca291c916c99584a10c56c02be47855dfde30db88138f29c958ffdf8fd7fa4133bd41bf527eef9b5013c6f04dbdbc6"' : 'data-target="#xs-components-links-module-PublicModule-0d2779fe472183b7e364907fd9fce49742ca291c916c99584a10c56c02be47855dfde30db88138f29c958ffdf8fd7fa4133bd41bf527eef9b5013c6f04dbdbc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-0d2779fe472183b7e364907fd9fce49742ca291c916c99584a10c56c02be47855dfde30db88138f29c958ffdf8fd7fa4133bd41bf527eef9b5013c6f04dbdbc6"' :
                                            'id="xs-components-links-module-PublicModule-0d2779fe472183b7e364907fd9fce49742ca291c916c99584a10c56c02be47855dfde30db88138f29c958ffdf8fd7fa4133bd41bf527eef9b5013c6f04dbdbc6"' }>
                                            <li class="link">
                                                <a href="components/CocktailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CocktailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-20d42eda3dbd801e25743a5b7ab4724e016ce5d52d1b1e7a3695eec2f79c734815f543e6e79feba26bb2196ce487193c1eb7bd38c999448b78bb357120cb23d7"' : 'data-target="#xs-components-links-module-UserModule-20d42eda3dbd801e25743a5b7ab4724e016ce5d52d1b1e7a3695eec2f79c734815f543e6e79feba26bb2196ce487193c1eb7bd38c999448b78bb357120cb23d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-20d42eda3dbd801e25743a5b7ab4724e016ce5d52d1b1e7a3695eec2f79c734815f543e6e79feba26bb2196ce487193c1eb7bd38c999448b78bb357120cb23d7"' :
                                            'id="xs-components-links-module-UserModule-20d42eda3dbd801e25743a5b7ab4724e016ce5d52d1b1e7a3695eec2f79c734815f543e6e79feba26bb2196ce487193c1eb7bd38c999448b78bb357120cb23d7"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});