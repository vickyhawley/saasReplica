<template>
    <div>
        <header>
			<nav>
				<!-- <div class="announcement">The SaaS Network Ireland Summer BBQ is June 27th at The Dubliner Pub, Ballsbridge, Dublin! <a target="_blank" href="https://ti.to/saas-network-ireland/saas-network-ireland-summer-bbq">Find out more</a></div> -->
				<div class="container">
					<div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 685.71 240.98"><title>logo</title><path d="M97.95 0L15.84 82.2a54.2 54.2 0 0 0 0 76.59l82.1-82.2A54.2 54.2 0 0 0 97.95 0zM121 72.62l-95.59 95.74a54.05 54.05 0 0 0 76.5 0l95.63-95.74a54.05 54.05 0 0 0-76.54 0zm4 91.77a54.2 54.2 0 0 0 0 76.61l82.1-82.2a54.2 54.2 0 0 0 0-76.59zm194.23-68.16q-5.55-5.61-19.37-10t-17.56-6.79a7.55 7.55 0 0 1-3.75-6.79q0-10 15.13-10 8.05 0 27.63 2.22l1.53-15.11-5-1A157.22 157.22 0 0 0 291.73 46q-15 0-23.6 6.93T259.52 74q0 11.23 6.6 17.53t22.7 10.88q10.13 2.91 13.54 5.41a8.11 8.11 0 0 1 3.4 6.93q0 12.2-14.72 12.2-9.86 0-28.46-2.49l-1.94 14.83 5 1q15.69 3.33 26.52 3.33 14.58 0 23.6-7.62t9-22.45q.02-11.7-5.53-17.32zm39 3.4q-12.36.83-18.33 5.47t-6 15.73q0 22.73 21.52 22.73a46.29 46.29 0 0 0 20.41-4.85 25.46 25.46 0 0 0 8.54 3.88 52.78 52.78 0 0 0 11.32 1l.56-14q-2.64-.55-3.47-1.87a11 11 0 0 1-1.11-4.64V94.22q0-12.19-5.9-17.74t-19.3-5.54a108.25 108.25 0 0 0-28.26 4l.56 12.89 26.1-1.11q4.3 0 6.25 1.59t1.94 5.89v4.3zm14.86 26.61l-2.08.55a45.06 45.06 0 0 1-11.52 1.66q-6.81 0-6.8-7.62t7.78-8.32l12.63-1.11zm94.14 3.33q-2.64-.55-3.47-1.87a11 11 0 0 1-1.11-4.64V94.22q0-12.19-5.9-17.74t-19.3-5.54a108.25 108.25 0 0 0-28.26 4l.56 12.89 26.1-1.11q4.3 0 6.25 1.59t1.9 5.91v4.3l-14.86 1.11q-12.36.83-18.33 5.47t-6 15.73q0 22.73 21.52 22.73a46.29 46.29 0 0 0 20.41-4.85 25.46 25.46 0 0 0 8.54 3.88 52.77 52.77 0 0 0 11.32 1zM444 126.24l-2.08.55a45 45 0 0 1-11.52 1.66q-6.81 0-6.8-7.62t7.78-8.32l12.62-1.1zm73.24-40.06q-13.82-4.43-17.56-6.79A7.55 7.55 0 0 1 496 72.6q0-10 15.13-10 8.05 0 27.63 2.22l1.53-15.11-5-1A157.22 157.22 0 0 0 509.16 46q-15 0-23.6 6.93T476.95 74q0 11.23 6.6 17.53t22.7 10.88q10.13 2.91 13.54 5.41a8.11 8.11 0 0 1 3.4 6.93q0 12.2-14.72 12.2-9.86 0-28.46-2.49l-1.94 14.83 5 1q15.69 3.33 26.52 3.33 14.58 0 23.6-7.62t9-22.45q0-11.64-5.55-17.26t-19.36-10.11zM279.43 194.65h-.76l-10.5-29.59h-9.8v34.53H264v-29.64h.71l10.75 29.64H285v-34.53h-5.6zm13.57 4.93h21.81v-4.94h-16.2v-10.08h13.18v-4.84h-13.18v-9.78h16.21v-4.89H293zM317.6 170h9.85v29.54h5.65V170h9.74v-5H317.6zm59.83 24.7h-1.11l-6.56-29.59h-6.56l-6.56 29.59h-1.06l-4.95-29.69h-5.91l6.77 34.53h9.09l5.91-27.67 6 27.67h9l6.82-34.53h-5.91zm28.63-30.24q-7.78 0-10.93 4.44T392 182.5q0 9.12 3.13 13.38t11 4.26q7.82 0 10.93-4.23t3.1-13.41q0-9.17-3.13-13.58t-10.98-4.41zm6.54 27.82q-1.69 2.92-6.54 2.92t-6.56-3q-1.72-3-1.72-9.8t1.77-10q1.77-3.12 6.51-3.13t6.49 3.13q1.74 3.13 1.74 10t-1.7 9.93zM451.44 176q0-11-11.71-11H426.6v34.53h5.6v-12.3h8.13l5 12.3h6.16l-5.7-13.53q5.65-2.59 5.65-10zm-7.17 4.66a5.39 5.39 0 0 1-4.44 1.74h-7.62v-12.5h7.52q6 0 6 6.2a7.09 7.09 0 0 1-1.46 4.61zm37.73-15.6h-6.41l-7.07 15.17-5.15.4v-15.57h-5.6v34.53h5.6v-14.07l5.15-.35 7.32 14.42h6.51l-8.89-17.19zm16.31 34.53H504v-34.53h-5.6zM536.77 176q0-11-11.71-11h-13.13v34.53h5.6v-12.3h8.13l5 12.3h6.16L531.11 186q5.66-2.59 5.66-10zm-7.17 4.66a5.39 5.39 0 0 1-4.44 1.74h-7.62v-12.5h7.52q6 0 6 6.2a7.09 7.09 0 0 1-1.46 4.61zm13.53 18.88h21.81v-4.94h-16.21v-10.04h13.18v-4.84h-13.18v-9.78h16.21v-4.89h-21.81zm33.52-34.53H571v34.53h19.39v-5h-13.74zm23.93 0l-8.53 34.53h5.6l1.87-7.41h13.28l1.87 7.41h5.65l-8.58-34.53zm.05 22.18l4.29-17.49h2.52l4.24 17.49zm45.69 7.41h-.76l-10.5-29.59h-9.8v34.53h5.6v-29.59h.71l10.75 29.64h9.59v-34.53h-5.6zm36.45-25.55q-2.93-4-10.91-4h-12v34.53h12q8.33 0 11.21-4.89a16.93 16.93 0 0 0 2-5.52 40.49 40.49 0 0 0 .58-7.43q.06-8.62-2.87-12.65zM679.63 187a14.84 14.84 0 0 1-1.09 4q-1.67 3.68-6.66 3.68h-6.36v-24.7h6.36q4.9 0 6.46 2.77t1.56 9a41.44 41.44 0 0 1-.27 5.25z" fill="#fff"/></svg></div>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#members">Members</a></li>
						<li><a href="#criteria">Criteria</a></li>
						<li><a href="#faqs">FAQs</a></li>
						<li><a href="#apply">Apply</a></li>
						<li><a href="https://twitter.com/saasnetireland" target="_blank" rel="noopener"><i class="fa fa-lg fa-twitter"></i></a></li>
					</ul>
					<a href="javascript:;" class="menu-toggle"></a>
				</div>
			</nav>

			<div class="container">
				<h1>{{ homepage.fields.heroHeading }}</h1>
				<p>{{ homepage.fields.heroCopy }}</p>
			</div>
		</header>

        <section id="about">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<h2><span class="about">About</span> SaaS Network <span class="ireland">Ireland</span></h2>
					</div>
					<div class="col-sm-6" v-html="aboutCopy"></div>
				</div>
			</div>
		</section>
<section id="members">
			<div class="container">
				<h2>Our Members</h2>
				</div>
				</section>
		<!----<section id="members">
			<div class="container">
				<h2>Our Members</h2>
				<a href='http://www.jumble.io' title='jumble.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/jumble.io.png?cachebust=2' alt='jumble.io'/></a>
                <a href='http://www.cultureark.com' title='cultureark.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/cultureark.com.png?cachebust=2' alt='cultureark.com'/></a>
                <a href='http://www.workcompass.com' title='workcompass.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/workcompass.com.png?cachebust=2' alt='workcompass.com'/></a>
                <a href='http://www.sitecert.net' title='sitecert.net' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/sitecert.net.png?cachebust=2' alt='sitecert.net'/></a>
                <a href='http://www.mediahq.com' title='mediahq.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/mediahq.com.png?cachebust=2' alt='mediahq.com'/></a>
                <a href='http://www.eidasolutions.com' title='eidasolutions.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/eidasolutions.com.png?cachebust=2' alt='eidasolutions.com'/></a>
                <a href='http://www.liveduel.com' title='liveduel.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/liveduel.com.png?cachebust=2' alt='liveduel.com'/></a>
                <a href='http://www.fluidui.com' title='fluidui.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/fluidui.com.svg?cachebust=2' alt='fluidui.com'/></a>
                <a href='http://www.dobiquity.com' title='dobiquity.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/dobiquity.com.jpg?cachebust=2' alt='dobiquity.com'/></a>
                <a href='http://www.stitcherads.com' title='stitcherads.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/stitcherads.com.png?cachebust=2' alt='stitcherads.com'/></a>
                <a href='http://www.assembla.com' title='assembla.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/assembla.com.svg?cachebust=2' alt='assembla.com'/></a>
                <a href='http://www.skillcord.com' title='skillcord.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/skillcord.com.png?cachebust=2' alt='skillcord.com'/></a>
                <a href='http://www.hostedgraphite.com' title='hostedgraphite.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/hostedgraphite.com.png?cachebust=2' alt='hostedgraphite.com'/></a>
                <a href='http://www.scorebuddy.com' title='scorebuddy.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/scorebuddy.com.png?cachebust=2' alt='scorebuddy.com'/></a>
                <a href='http://www.transpoco.com' title='transpoco.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/transpoco.com.png?cachebust=2' alt='transpoco.com'/></a>
                <a href='http://www.keelvar.com' title='keelvar.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/keelvar.com.png?cachebust=2' alt='keelvar.com'/></a>
                <a href='http://www.loylap.com' title='loylap.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/loylap.com.png?cachebust=2' alt='loylap.com'/></a>
                <a href='http://www.awesound.com' title='awesound.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/awesound.com.png?cachebust=2' alt='awesound.com'/></a>
                <a href='http://www.outbound.io' title='outbound.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/outbound.io.png?cachebust=2' alt='outbound.io'/></a>
                <a href='http://www.chargify.com' title='chargify.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/chargify.com.png?cachebust=2' alt='chargify.com'/></a><a href='http://www.yellowschedule.com' title='yellowschedule.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/yellowschedule.com.png?cachebust=2' alt='yellowschedule.com'/></a>
                <a href='http://www.peptalk.ie' title='peptalk.ie' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/peptalk.ie.png?cachebust=2' alt='peptalk.ie'/></a><a href='http://www.newsweaver.com' title='newsweaver.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/newsweaver.com.jpg?cachebust=2' alt='newsweaver.com'/></a><a href='http://www.tucr.io' title='tucr.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/tucr.io.png?cachebust=2' alt='tucr.io'/></a>
                <a href='http://www.aylien.com' title='aylien.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/aylien.com.png?cachebust=2' alt='aylien.com'/></a><a href='http://www.harpoonconnect.com' title='harpoonconnect.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/harpoonconnect.com.png?cachebust=2' alt='harpoonconnect.com'/></a><a href='http://www.scrapinghub.com' title='scrapinghub.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/scrapinghub.com.png?cachebust=2' alt='scrapinghub.com'/></a>
                <a href='http://www.trustev.com' title='trustev.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/trustev.com.png?cachebust=2' alt='trustev.com'/></a><a href='http://www.smarttracesoftware.com' title='smarttracesoftware.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/smarttracesoftware.com.jpg?cachebust=2' alt='smarttracesoftware.com'/></a>
                <a href='http://www.pubble.io' title='pubble.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/pubble.io.png?cachebust=2' alt='pubble.io'/></a><a href='http://www.subwoofr.com' title='subwoofr.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/subwoofr.com.png?cachebust=2' alt='subwoofr.com'/></a>
                <a href='http://www.savvyconnects.com' title='savvyconnects.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/savvyconnects.com.png?cachebust=2' alt='savvyconnects.com'/></a>
                <a href='http://www.playtank.net' title='playtank.net' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/playtank.net.png?cachebust=2' alt='playtank.net'/></a><a href='http://www.circit.io' title='circit.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/circit.io.png?cachebust=2' alt='circit.io'/></a><a href='http://www.evercam.io' title='evercam.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/evercam.io.png?cachebust=2' alt='evercam.io'/></a>
                <a href='http://www.salesoptimize.com' title='salesoptimize.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/salesoptimize.com.png?cachebust=2' alt='salesoptimize.com'/></a><a href='http://www.servicedock.com' title='servicedock.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/servicedock.com.png?cachebust=2' alt='servicedock.com'/></a>
                <a href='http://www.corrata.com' title='corrata.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/corrata.com.png?cachebust=2' alt='corrata.com'/></a><a href='http://www.hubspot.com' title='hubspot.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/hubspot.com.svg?cachebust=2' alt='hubspot.com'/></a><a href='http://www.getvetter.com' title='getvetter.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/getvetter.com.png?cachebust=2' alt='getvetter.com'/></a>
                <a href='http://www.onepagecrm.com' title='onepagecrm.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/onepagecrm.com.png?cachebust=2' alt='onepagecrm.com'/></a>
                <a href='http://www.ecoonline.com' title='ecoonline.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/ecoonline.com.png?cachebust=2' alt='ecoonline.com'/></a><a href='http://www.refuel4.com' title='refuel4.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/refuel4.com.png?cachebust=2' alt='refuel4.com'/></a>
                <a href='http://www.volograms.com' title='volograms.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/volograms.com.png?cachebust=2' alt='volograms.com'/></a>
                <a href='http://www.zappaz.com' title='zappaz.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/zappaz.com.png?cachebust=2' alt='zappaz.com'/></a><a href='http://www.beautifeye.co' title='beautifeye.co' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/beautifeye.co.png?cachebust=2' alt='beautifeye.co'/></a><a href='http://www.carefolk.com' title='carefolk.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/carefolk.com.png?cachebust=2' alt='carefolk.com'/></a>
                <a href='http://www.kongalytics.com' title='kongalytics.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/kongalytics.com.png?cachebust=2' alt='kongalytics.com'/></a>
                <a href='http://www.hirelogic.co.uk' title='hirelogic.co.uk' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/hirelogic.co.uk.png?cachebust=2' alt='hirelogic.co.uk'/></a><a href='http://www.esinstitute.com' title='esinstitute.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/esinstitute.com.png?cachebust=2' alt='esinstitute.com'/></a>
                <a href='http://www.voicesage.com' title='voicesage.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/voicesage.com.jpg?cachebust=2' alt='voicesage.com'/></a><a href='http://www.teachkloud.com' title='teachkloud.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/teachkloud.com.svg?cachebust=2' alt='teachkloud.com'/></a>
                <a href='http://www.playmigo.com' title='playmigo.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/playmigo.com.png?cachebust=2' alt='playmigo.com'/></a>
                <a href='http://www.tapstak.com' title='tapstak.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/tapstak.com.png?cachebust=2' alt='tapstak.com'/></a><a href='http://www.scurri.co.uk' title='scurri.co.uk' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/scurri.co.uk.jpg?cachebust=2' alt='scurri.co.uk'/></a>
                <a href='http://www.cloudsmith.io' title='cloudsmith.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/cloudsmith.io.png?cachebust=2' alt='cloudsmith.io'/></a><a href='http://www.myplaceconnect.com' title='myplaceconnect.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/myplaceconnect.com.png?cachebust=2' alt='myplaceconnect.com'/></a>
                <a href='http://www.blueface.com' title='blueface.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/blueface.com.png?cachebust=2' alt='blueface.com'/></a><a href='http://www.provencoder.com' title='provencoder.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/provencoder.com.png?cachebust=2' alt='provencoder.com'/></a>
                <a href='http://www.edgescan.com' title='edgescan.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/edgescan.com.png?cachebust=2' alt='edgescan.com'/></a><a href='http://www.zazsi.com' title='zazsi.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/zazsi.com.png?cachebust=2' alt='zazsi.com'/></a><a href='http://www.axonista.com' title='axonista.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/axonista.com.png?cachebust=2' alt='axonista.com'/></a>
                <a href='http://www.warbble.com' title='warbble.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/warbble.com.png?cachebust=2' alt='warbble.com'/></a><a href='http://www.bigredcloud.com' title='bigredcloud.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/bigredcloud.com.png?cachebust=2' alt='bigredcloud.com'/></a>
                <a href='http://www.restoredhearing.com' title='restoredhearing.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/restoredhearing.com.png?cachebust=2' alt='restoredhearing.com'/></a>
                <a href='http://www.designwizard.com' title='designwizard.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/designwizard.com.png?cachebust=2' alt='designwizard.com'/></a>
                <a href='http://www.interplay.io' title='interplay.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/interplay.io.png?cachebust=2' alt='interplay.io'/></a><a href='http://www.datahug.com' title='datahug.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/datahug.com.png?cachebust=2' alt='datahug.com'/></a><a href='http://www.techstars.com' title='techstars.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/techstars.com.png?cachebust=2' alt='techstars.com'/></a><a href='http://www.fundrecs.com' title='fundrecs.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/fundrecs.com.png?cachebust=2' alt='fundrecs.com'/></a><a href='http://www.initiafy.com' title='initiafy.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/initiafy.com.png?cachebust=2' alt='initiafy.com'/></a><a href='http://www.d4htechnologies.com' title='d4htechnologies.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/d4htechnologies.com.png?cachebust=2' alt='d4htechnologies.com'/></a><a href='http://www.espatial.com' title='espatial.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/espatial.com.png?cachebust=2' alt='espatial.com'/></a><a href='http://www.rentview.com' title='rentview.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/rentview.com.png?cachebust=2' alt='rentview.com'/></a><a href='http://www.parolla.ie' title='parolla.ie' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/parolla.ie.png?cachebust=2' alt='parolla.ie'/></a><a href='http://www.effective-software.com' title='effective-software.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/effective-software.com.png?cachebust=2' alt='effective-software.com'/></a><a href='http://www.hirehive.io' title='hirehive.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/hirehive.io.png?cachebust=2' alt='hirehive.io'/></a><a href='http://www.parkoffice.io' title='parkoffice.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/parkoffice.io.svg?cachebust=2' alt='parkoffice.io'/></a><a href='http://www.hrlocker.com' title='hrlocker.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/hrlocker.com.png?cachebust=2' alt='hrlocker.com'/></a><a href='http://www.komeer.com' title='komeer.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/komeer.com.png?cachebust=2' alt='komeer.com'/></a><a href='http://www.onelooksystems.com' title='onelooksystems.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/onelooksystems.com.png?cachebust=2' alt='onelooksystems.com'/></a><a href='http://www.newswhip.com' title='newswhip.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/newswhip.com.png?cachebust=2' alt='newswhip.com'/></a><a href='http://www.paymentworks.com' title='paymentworks.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/paymentworks.com.png?cachebust=2' alt='paymentworks.com'/></a><a href='http://www.surfaccounts.com' title='surfaccounts.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/surfaccounts.com.png?cachebust=2' alt='surfaccounts.com'/></a><a href='http://www.referral.works' title='referral.works' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/referral.works.jpg?cachebust=2' alt='referral.works'/></a><a href='http://www.ezora.com' title='ezora.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/ezora.com.svg?cachebust=2' alt='ezora.com'/></a><a href='http://www.viddyad.com' title='viddyad.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/viddyad.com.png?cachebust=2' alt='viddyad.com'/></a><a href='http://www.tradepath.app' title='tradepath.app' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/tradepath.app.png?cachebust=2' alt='tradepath.app'/></a><a href='http://www.altocloud.com' title='altocloud.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/altocloud.com.png?cachebust=2' alt='altocloud.com'/></a><a href='http://www.nvolvegroup.com' title='nvolvegroup.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/nvolvegroup.com.png?cachebust=2' alt='nvolvegroup.com'/></a><a href='http://www.bizimply.com' title='bizimply.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/bizimply.com.png?cachebust=2' alt='bizimply.com'/></a><a href='http://www.xoxoday.com' title='xoxoday.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/xoxoday.com.png?cachebust=2' alt='xoxoday.com'/></a>
                <a href='http://www.procurementexpress.com' title='procurementexpress.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/procurementexpress.com.png?cachebust=2' alt='procurementexpress.com'/></a><a href='http://www.netaffinity.com' title='netaffinity.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/netaffinity.com.png?cachebust=2' alt='netaffinity.com'/></a><a href='http://www.clientrol.com' title='clientrol.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/clientrol.com.png?cachebust=2' alt='clientrol.com'/></a><a href='http://www.tenderscout.com.jpeg' title='tenderscout.com.jpeg' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/tenderscout.com.jpeg?cachebust=2' alt='tenderscout.com.jpeg'/></a><a href='http://www.megsupporttools.com' title='megsupporttools.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/megsupporttools.com.png?cachebust=2' alt='megsupporttools.com'/></a><a href='http://www.xsellco.com' title='xsellco.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/xsellco.com.jpg?cachebust=2' alt='xsellco.com'/></a><a href='http://www.teamwork.com' title='teamwork.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/teamwork.com.png?cachebust=2' alt='teamwork.com'/></a><a href='http://www.currencyfair.com' title='currencyfair.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/currencyfair.com.svg?cachebust=2' alt='currencyfair.com'/></a><a href='http://www.overcasthq.com' title='overcasthq.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/overcasthq.com.png?cachebust=2' alt='overcasthq.com'/></a><a href='http://www.wia.io' title='wia.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/wia.io.png?cachebust=2' alt='wia.io'/></a><a href='http://www.guestdiary.com' title='guestdiary.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/guestdiary.com.png?cachebust=2' alt='guestdiary.com'/></a><a href='http://www.openback.com' title='openback.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/openback.com.png?cachebust=2' alt='openback.com'/></a><a href='http://www.exordo.com' title='exordo.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/exordo.com.jpg?cachebust=2' alt='exordo.com'/></a><a href='http://www.gymmix.com' title='gymmix.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/gymmix.com.png?cachebust=2' alt='gymmix.com'/></a><a href='http://www.idea-haven.com' title='idea-haven.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/idea-haven.com.jpg?cachebust=2' alt='idea-haven.com'/></a><a href='http://www.tweak.com' title='tweak.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/tweak.com.png?cachebust=2' alt='tweak.com'/></a><a href='http://www.hivesalonsoftware.com' title='hivesalonsoftware.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/hivesalonsoftware.com.png?cachebust=2' alt='hivesalonsoftware.com'/></a><a href='http://www.learnlode.com' title='learnlode.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/learnlode.com.jpg?cachebust=2' alt='learnlode.com'/></a><a href='http://www.roomex.com' title='roomex.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/roomex.com.png?cachebust=2' alt='roomex.com'/></a><a href='http://www.platformavenue.com' title='platformavenue.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/platformavenue.com.png?cachebust=2' alt='platformavenue.com'/></a><a href='http://www.opening.io' title='opening.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/opening.io.png?cachebust=2' alt='opening.io'/></a><a href='http://www.channelmechanics.com' title='channelmechanics.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/channelmechanics.com.png?cachebust=2' alt='channelmechanics.com'/></a>
                <a href='http://www.gymix.ie' title='gymix.ie' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/gymix.com.jpg?cachebust=2' alt='gymix.ie'/></a><a href='http://www.mindmybusiness.ie' title='mindmybusiness.ie' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/mindmybusiness.ie.png?cachebust=2' alt='mindmybusiness.ie'/></a><a href='http://www.Sensorpro.net' title='Sensorpro.net' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/Sensorpro.net.png?cachebust=2' alt='Sensorpro.net'/></a><a href='http://www.glofox.com' title='glofox.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/glofox.com.png?cachebust=2' alt='glofox.com'/></a><a href='http://www.fileexpenses.com' title='fileexpenses.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/fileexpenses.com.png?cachebust=2' alt='fileexpenses.com'/></a>
                <a href='http://www.traitly.com' title='traitly.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/traitly.com.jpg?cachebust=2' alt='traitly.com'/></a><a href='http://www.sonru.com' title='sonru.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/sonru.com.png?cachebust=2' alt='sonru.com'/></a><a href='http://www.quickminutes.com' title='quickminutes.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/quickminutes.com.png?cachebust=2' alt='quickminutes.com'/></a>
                 <a href='http://www.bookapitch.com' title='bookapitch.com' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/bookapitch.com.png?cachebust=2' alt='bookapitch.com'/></a><a href='https://www.upscaler.io' title='upscaler.io' rel='noopener noreferrer' target='_blank'><img src='~/assets/images/logos/upscaler.png' alt='upscaler.io'/></a>			</div>
		</section> -->

		<section id="criteria">
			<div class="container">
				<div class="content">
					<h2>Criteria to be a member of SaaS Network Ireland</h2>
					<div class="row">
						<div class="col-sm-6 hidden-xs">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491 530.75" width="491" height="531"><title>criteria</title><defs><filter id="blur"><feGaussianBlur stdDeviation="15"></feGaussianBlur></filter></defs><path d="M215.72 0L34.89 181a119.36 119.36 0 0 0 0 168.67l180.81-181A119.36 119.36 0 0 0 215.72 0zm50.76 159.93L56 370.78a119 119 0 0 0 168.34.14l.14-.14 210.57-210.85a119 119 0 0 0-168.34-.22zM275.3 362a119.36 119.36 0 0 0 0 168.72l180.81-181a119.36 119.36 0 0 0 0-168.67z" fill="#00b4ff"/><path fill="#fff" d="M79 135.33h116V394H79z"/><rect x="187.13" y="76" width="126.67" height="20" rx="3.94" ry="3.94" fill="#45c8ff"/><path class="shadow" fill="rgba(0,0,0,0.3)" d="M109.67 86h280v358h-280z"/><path fill="#fff" d="M109.67 86h280v358h-280z"/><path d="M247.78 121.25l-16.35 16.37a10.8 10.8 0 0 0 0 15.25l16.35-16.37a10.8 10.8 0 0 0 0-15.25zm4.59 14.46l-19 19.07a10.77 10.77 0 0 0 15.22 0l19-19.07a10.77 10.77 0 0 0-15.22 0zm.8 18.28a10.8 10.8 0 0 0 0 15.26l16.35-16.37a10.8 10.8 0 0 0 0-15.25z" fill="#00a2ff"/><path d="M323.42 201h-146v-4h146zm0 10h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 0h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146zm0 15h-146v4h146zm0 14h-146v4h146zm0 14h-146v4h146z" fill="#cfcfcf"/></svg>
						</div>
						<div class="col-sm-6">
							<ul>
								<li>Have a product website and customers.</li>
								<li>Business based or founded in Ireland.</li>
								<li>Support self-service SaaS: customers can sign up and trial your product, pay by credit card, and cancel the subscription anytime.</li>
								<li>Provide enterprise/demo SaaS: demos show the actual product and you have existing customers.</li>
								<li>Payment via credit card available.</li>
								<li>CEO and optionally CTO/CFO’s agree to making themselves available to other members for a maximum of 2 hours a month, when possible.</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="faqs">
			<div class="container">
				<h2>Frequently Asked Questions</h2>
				<dl>
					<dt>
						<a class="question" href="javascript:;">Will there be networking events?</a>
					</dt>
					<dd>
						<div class="answer">In general very few - we feel that too many networking events are a distraction from growing your business. We held our kick off event on 15th February in Dublin and intend to host only one truly interactive yearly meetup.</div>
					</dd>
					<dt>
						<a class="question" href="javascript:;">Will the website be improved? Will there be online forums, member logins etc.</a>
					</dt>
					<dd>
						<div class="answer">No. For now the plan is to keep this extremely low-tech. You will have access to a Google Sheet with the other members’ details.</div>
					</dd>
					<dt>
						<a class="question" href="javascript:;">What happens if I get a request but have a busy month or have already committed my 2 hours?</a>
					</dt>
					<dd>
						<div class="answer">No problem, just say that your agenda is full this month. They can ask again in another month. It should be “first come first served” and also fairly low committal - your own business comes first.</div>
					</dd>
					<dt>
						<a class="question" href="javascript:;">Should the meeting be in person or online?</a>
					</dt>
					<dd>
						<div class="answer">Entirely up to you. Whatever works best for the person whose time is being asked for.</div>
					</dd>
					<dt>
						<a class="question" href="javascript:;">I don't have X/I'm not a Y, can I join?</a>
					</dt>
					<dd>
						<div class="answer">
							<ul>
								<li>I don't have a website yet but it's on the way, can I join?</li>
								<li>I don't do self-service yet but it's on the way, can I join?</li>
								<li>I make online software but it's not your strict definition of true SaaS, can I join?</li>
								<li>We only take invoices, can I join?</li>
								<li>I am SaaS but don’t provide a self-service sign-up option, can I join?</li>
							</ul>
							Sorry, no. It's not to be snobby but in order to share and receive some expertise we should all operate in the same space.
						</div>
					</dd>
				</dl>

				<p class="contact">You don’t see your question in the list above or you want to say hi? <span class="email"></span> or <a href="https://twitter.com/saasnetireland" target="_blank">follow us on Twitter</a></p>
			</div>
		</section>

		<section id="apply">
			<div class="container">
				<h2>Join SaaS Network Ireland</h2>
				<!-- <a href="javascript:;" class="linkedin-signup">
					<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.08 43.75"><title>linkedin</title><path fill="#fff" d="M14.17 34.57v-18.3H8.52v18.3h5.66zm0-24.78a2.78 2.78 0 0 0-2.9-2.88 2.79 2.79 0 0 0-2.93 2.88 2.77 2.77 0 0 0 2.86 2.88 2.79 2.79 0 0 0 2.97-2.88zm9.23 24.78V24.15a4.24 4.24 0 0 1 .2-1.51 3.4 3.4 0 0 1 3.18-2.27c2.25 0 3.65 1.27 3.65 3.78v10.42h5.69v-10.7c0-5.73-3.06-8.4-7.14-8.4a6.18 6.18 0 0 0-5.63 3.15v-2.45h-5.64c.08 1.75 0 18.41 0 18.41h5.69z"/></svg></span>
					<span class="text">Apply with Linkedin</span>
				</a> -->
				<div class="form-container">
          <form class='application-form' method='POST' name='Join SaaS Network Ireland'><input type='hidden' name='form-name' value='Join SaaS Network Ireland' />
            <input type="text" name="name" required="required" placeholder="Your name">
            <input type="email" name="email" required="required" placeholder="Your email">
            <input type="text" name="company" required="required" placeholder="Your company">
            <input type="text" name="role" required="required" placeholder="Role in the company">
            <input type="text" name="profileUrl" required="required" placeholder="Linkedin profile URL">
            <button type="submit">Apply Now</button>
          </form>
        </div>
				<div class="user-card"></div>
			</div>
		</section>
    </div>
</template>

<script>
    import { createClient } from '~/plugins/contentful.js';
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const client = createClient();

    export default {
        // `env` is available in the context object
        asyncData({ env }) {
            return Promise.all([
                        client.getEntries({
                            'sys.id': '3SEoy4GbuqusJUESfH8CIp',
                        }),
                    ])
                    .then(([entries]) => {
                        const homepage = entries.items[0];                       

                        return {
                            homepage: homepage,
                            aboutCopy: documentToHtmlString(homepage.fields.aboutCopy)
                        };
                    })
                    .catch(console.error);
        },
    };
</script>