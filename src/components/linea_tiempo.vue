<template>
    <div class="page">
        <div class="timeline">
            <div class="timeline__group">
                <span class="timeline__year time" aria-hidden="true">2017</span>
                <div class="timeline__cards">
                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-02-02">
                                <span class="time__day">5</span>
                                <span class="time__month">mayo a julio 14 de 2019</span>
                            </time>
                        </header>
                        <div class="card__content">
                            <h3 class="card__title r-title">Universidad de los llanos</h3>
                            <p>Inicio estudios pregrado en la universidad de los llanos en la carrera ingenieria de sistemas
                            </p>
                        </div>
                    </div>
                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-09-01">
                                <span class="time__day">1</span>
                                <span class="time__month">diciembre - actualmente</span>
                            </time>
                            <h3 class="card__title r-title">Jara inmobiliaria S.A.S.</h3>
                        </header>
                        <div class="card__content">
                            <p>Primer trabajo con empresa familiar <a href="">Jara Inmobiliaria S.A.S.</a>, encargado del
                                área de sistemas, soporte en linea, y presencial </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline__group">
                <span class="timeline__year time" aria-hidden="true">2019</span>
                <div class="timeline__cards">
                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-07-14">
                                <span class="time__day">14</span>
                                <span class="time__month">Jul - actualmente</span>
                            </time>
                        </header>
                        <h3 class="card__title r-title">Universidad Cooperativa de colombia</h3>
                        <div class="card__content">
                            <p>Continuación pregrado en ingenieria de sistemas </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline__group">
                <span class="timeline__year time" aria-hidden="true">2022</span>
                <div class="timeline__cards">
                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-08-18">
                                <span class="time__day">14</span>
                                <span class="time__month">mayo
                                </span>
                            </time>
                        </header>
                        <h3 class="card__title r-title">Restrepo Plaza Hotel</h3>
                        <div class="card__content">
                            <p>Diseño e implementación de la pagina web estática para la entidad hotelera <b> <a href="">Restrepo Plaza Hotel</a> </b> </p>
                        </div>
                    </div>

                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-08-18">
                                <span class="time__day">16</span>
                                <span class="time__month">Octubre
                                </span>
                            </time>
                        </header>
                        <h3 class="card__title r-title">Audicomsystem</h3>
                        <div class="card__content">
                            <p>Diseño y creacion del aplicativo web <b>ACS</b>, para la gestión de inventarios.</p>
                        </div>
                    </div>

                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-08-18">
                                <span class="time__day">26</span>
                                <span class="time__month">Noviembre - actualmente
                                </span>
                            </time>
                        </header>
                        <h3 class="card__title r-title">Creditek S.A.S.</h3>
                        <div class="card__content">
                            <p>Desarrollador IT junior <b>(tiempo parcial)</b>, administrador de la base de datos hecha en MySQL, análisis de datos, automatizaciones. </p>
                        </div>
                    </div>

                    <div class="timeline__card card">
                        <header class="card__header">
                            <time class="time" datetime="2008-08-18">
                                <span class="time__day">27</span>
                                <span class="time__month">Diciembre
                                </span>
                            </time>
                        </header>
                        <h3 class="card__title r-title">Sales del llano S.A.</h3>
                        <div class="card__content">
                            <p>Diseño e implementación de la pagina web estática <b> <a href="">Sales del llano S.A.</a> </b> </p>
                        </div>
                    </div>


                </div>
            </div>

            


        </div>
    </div>
   
</template>


<script>


export default {
    name: 'linea_tiempo'

}

</script>


<style scoped>
/*
!!!!
This pen is being refactored
!!!!
*/

/*
=====
DEPENDENCES
=====
*/

.r-title {
    margin-top: var(--rTitleMarginTop, 0) !important;
    margin-bottom: var(--rTitleMarginBottom, 0) !important;
}


p:not([class]) {
    line-height: var(--cssTypographyLineHeight, 1.78);
    margin-top: var(--cssTypographyBasicMargin, 1em);
    margin-bottom: 0;
}

p:not([class]):first-child {
    margin-top: 0;
}

/*
text component
*/

.text {
    display: var(--textDisplay, inline-flex);
    font-size: var(--textFontSize, 1rem);
}

/*
time component
*/

/*
core styles
*/

.time {
    display: var(--timeDisplay, inline-flex);
}

/*
extensions
*/

.time__month {
    margin-left: var(--timelineMounthMarginLeft, .25em);
}

/*
skin
*/

.time {
    padding: var(--timePadding, .25rem 1.25rem .25rem);
    background-color: var(--timeBackgroundColor, #f0f0f0);

    font-size: var(--timeFontSize, .75rem);
    font-weight: var(--timeFontWeight, 700);
    text-transform: var(--timeTextTransform, uppercase);
    color: var(--timeColor, currentColor);
}

/*
card component
*/

/*
core styles
*/

.card {
    padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);
}

.card__content {
    margin-top: var(--cardContentMarginTop, .5rem);
}

/*
skin
*/

.card {
    border-radius: var(--timelineCardBorderRadius, 2px);
    border-left: var(--timelineCardBorderLeftWidth, 3px) solid var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));
    box-shadow: var(--timelineCardBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24));
    background-color: var(--timelineCardBackgroundColor, #fff);
}

/*
extensions
*/

.card__title {
    --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);
    font-size: var(--cardTitleFontSize, 1.25rem);
}

/*
=====
CORE STYLES
=====
*/

.timeline {
    display: var(--timelineDisplay, grid);
    grid-row-gap: var(--timelineGroupsGap, 2rem);
}

/*
1. If timeline__year isn't displaed the gap between it and timeline__cards isn't displayed too
*/

.timeline__year {
    margin-bottom: 1.25rem;
    /* 1 */
}

.timeline__cards {
    display: var(--timeloneCardsDisplay, grid);
    grid-row-gap: var(--timeloneCardsGap, 1.5rem);
}


/*
=====
SKIN
=====
*/

.timeline {
    --uiTimelineMainColor: var(--timelineMainColor, #222);
    --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

    border-left: var(--timelineLineWidth, 3px) solid var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));
    padding-top: 1rem;
    padding-bottom: 1.5rem;
}

.timeline__year {
    --timePadding: var(--timelineYearPadding, .5rem 1.5rem);
    --timeColor: var(--uiTimelineSecondaryColor);
    --timeBackgroundColor: var(--uiTimelineMainColor);
    --timeFontWeight: var(--timelineYearFontWeight, 400);
}

.timeline__card {
    position: relative;
    margin-left: var(--timelineCardLineGap, 1rem);
}

/*
1. Stoping cut box shadow
*/

.timeline__cards {
    overflow: hidden;
    padding-top: .25rem;
    /* 1 */
    padding-bottom: .25rem;
    /* 1 */
}

.timeline__card::before {
    content: "";
    width: 100%;
    height: var(--timelineCardLineWidth, 2px);
    background-color: var(--timelineCardLineBackgroundColor, var(--uiTimelineMainColor));

    position: absolute;
    top: var(--timelineCardLineTop, 1rem);
    left: -50%;
    z-index: -1;
}

/*
=====
SETTINGS
=====
*/
/**/
.timeline {
    --timelineMainColor: #4557bb;
}

/*
=====
DEMO
=====
*/

body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
    color: #222;

    background-color: #f0f0f0;
    margin: 0;
    display: flex;
    flex-direction: column;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.5;
}

p:last-child {
    margin-bottom: 0;
}

.page {
    max-width: 47rem;
    padding: 5rem 2rem 3rem;
    margin-left: auto;
    margin-right: auto;
}


.substack {
    border: 1px solid #EEE;
    background-color: #fff;
    width: 100%;
    max-width: 480px;
    height: 280px;
    margin: 1rem auto;
    ;
}


.linktr {
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
    text-align: center;
}

.linktr__goal {
    background-color: rgb(209, 246, 255);
    color: rgb(8, 49, 112);
    box-shadow: rgb(8 49 112 / 24%) 0px 2px 8px 0px;
    border-radius: 2rem;
    padding: .75rem 1.5rem;
}

.r-link {
    --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
    --uirLinkTextColor: var(--rLinkTextColor);
    --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

    display: var(--uirLinkDisplay) !important;
    color: var(--uirLinkTextColor) !important;
    text-decoration: var(--uirLinkTextDecoration) !important;
}</style>