---
layout: schema
title: Secondhand CDs - Schema
permalink: /mlis/metadata/schema
---
# Secondhand CDs Metadata Schema

**Published:** December 2019

**Author:** Kelsey Rogers

**Download:** [Specifications PDF]({{ '/mlis/metadata/SecondhandCDs.pdf' | relative_URL }})

**Table of Contents:**
- [Description of Schema](#description)
- [Elements and Specifications](#elements)
- [Appendix A: Album Production Type Value Control](#appendix-a)
- [Appendix B: Artist Class Value Control](#appendix-b)
- [Appendix C: URL Attribute Control](#appendix-c)

---

## [Description](#description)
Secondhand CDs (abbreviated scd), is a metadata schema for describing a personal collection of CDs purchased from secondhand and thrift stores from across the country, primarily in Ohio. These CDs primarily consist of self-published and small studio albums. Many have been published in the region, such as the Mahoning Valley Button Box Club’s “Everyone’s Choice IV,” and thus provide insight into places I’ve visited or moved to. Others have come from around the world, bringing to mind questions that can’t be answered but are nonetheless intriguing, such as “Who originally bought these?” and “How did they end up here?”

The metadata schema focuses on these unique aspects of these types of albums. Many of the artists do not have information online, or if they do, this information can only be found in archived form. Thus, providing artist information is important. However, these artists rarely have much information associated with them on the album so creating an authority file for each has its limitations, especially when the collection does not contain multiple appearances of the same artist. The appearance of the albums are also of interest, as many have signatures, printer-paper inserts, and homemade printed adhesive disc labels.

---

## [Elements](#elements)

1\. [CD](/scd/cd) [M]

1.1 [identifier](/scd/identifier) [M]

1.2 [description](/scd/description) [O]

1.3 [locationPurchased](/scd/locationpurchased) [M]

1.4 [album](/scd/album) [M]
- 1.4.1 [albumTitle](/scd/albumtitle) [M]
- 1.4.2 [albumGenre](/scd/albumgenre) [O, R]
- 1.4.3 [albumProductionType](/scd/albumproductiontype) [M]
- 1.4.4 [albumReleaseYear](/scd/albumreleaseyear) [M]
- 1.4.5 [albumProducer](/scd/albumproducer) [M]
  - 1.4.5.1 [albumProducerName](/scd/albumproducername) [M]
  - 1.4.5.2 [albumProducerURL](/scd/albumproducerurl) [O, R]
  - 1.4.5.3 [albumProducerEmail](/scd/albumproduceremail) [O]
- 1.4.6 [albumLocationRecorded](/scd/albumlocationrecorded) [O]
- 1.4.7 [albumRightsStatement](/scd/albumrights) [M]
- 1.4.8 [albumTracks](/scd/albumtracks) [M]
- 1.4.8.1 [track](/scd/track) [M, R]
  - 1.4.8.1.1 [trackTitle](/scd/tracktitle) [M]
  - 1.4.8.1.2 [trackLength](/scd/tracklength) [O]
  - 1.4.8.1.3 [trackDescription](/scd/trackdescription) [O]
  - 1.4.8.1.4 [trackLanguage](/scd/tracklanguage) [M, R]
  - 1.4.8.1.5 [trackArtist](/scd/trackartist) [O, R]
    - 1.4.8.1.5.1 [trackArtistName](/scd/trackartistname)
    - 1.4.8.1.5.2 [trackArtistClass](/scd/trackartistclass)
    - 1.4.8.1.5.3 [trackArtistRole](/scd/trackartistrole) [O, R]
  - 1.4.8.1.6 [trackAudioURL](/scd/trackaudiourl) [O]

1.5 [musicGroup](/scd/musicgroup) [O]
- 1.5.1 [musicGroupName](/scd/musicgroupname)
- 1.5.2 [musicGroupURL](/scd/musicgroupurl) [O, R]
- 1.5.3 [musicGroupEmail](/scd/musicgroupemail) [O]
- 1.5.4 [musicGroupLocation](/scd/musicgrouplocation) [O]

1.6 [musicArtists](/scd/musicartists) [M]
- 1.6.1 [musicArtist](/scd/musicartist) [M,R]
  - 1.6.1.1 [musicArtistName](/scd/musicartistname) [M]
  - 1.6.1.2 [musicArtistClass](/scd/musicartistclass) [M]
  - 1.6.1.3 [musicArtistRole](/scd/musicartistrole) [O, R]
  - 1.6.1.4 [musicArtistURL](/scd/musicartisturl) [O, R]
  - 1.6.1.5 [musicArtistEmail](/scd/musicartistemail) [O]

1.7 [contributors](/scd/contributors) [O]
- 1.7.1 [contributor](/scd/contributor) [R]
  - 1.7.1.1 [contributorName](/scd/contributorname)
  - 1.7.1.2 [contributorRole](/scd/contributorrole) [R]
  - 1.7.1.3 [contributorURL](/scd/contributorurl) [R]
  - 1.7.1.4 [contributorEmail](/scd/contributoremail)

1.8 [appearance](/scd/appearance) [M]
- 1.8.1 [signature](/scd/signature) [O, R]
- 1.8.2 [insertMaterial](/scd/insertmaterial) [M]
- 1.8.3 [discLabel](/scd/disclabel) [M]
- 1.8.4 [image](/scd/image) [O, R]
  - 1.8.4.1 [imageID](/scd/imageidentifier)
  - 1.8.4.2 [imageURL](/scd/imageurl) [O]
  - 1.8.4.3 [imageDescription](/scd/imagedescription) [O]

---

## [Appendix A](#appendix-a)

### Album Production Type Value Control

**studio:** the tracks were originally recorded with the intent of releasing them in a cohesive album to the general public. Self-published albums can still be studio albums.

**compilation:** the tracks were NOT ORIGINALLY recorded with the intent of releasing them in a cohesive album to the general public, however they are released officially in compilation form as opposed to a mixtape. “Greatest Hits” style albums are an example of compilations.

**demo:** the album was intended for limited release and circulation for reference purposes

**mixtape:** a homemade compilation-style album consisting of tracks from different sources UNOFFICIALLY compiled into an album for person-to-person sharing.

**DJ mixset:** a compilation of tracks similar to a mixtape but the tracks are remixed with the intent to be performed live in front of an audience.

**soundtrack:** an album consisting of music directly recorded for a film or tv show.

**spoken word:** an album consisting of non-musical tracks but instead tracks that feature poetry, stories, monologues, or comedy.

---

## [Appendix B](#appendix-b)

### Artist Class Value Control

**guest artist:** a music artist that is either listed as a guest or contributing artist, or was not listed as part of the band or group

**group member:** a music artist that is listed as an official member of the band or group

**original artist:** the artist who originally created the song that is now being recorded/remixed by a different artist for this album. This is especially useful in the case of remixed tracks or covers to allow for designation of the original recording artist. ([1.4.8.1.5.2 trackArtistClass](/scd/trackartistclass) ONLY)

**solo artist:** this value is used for an artist who created a self-published solo project to differentiate them from a “group member” ([1.6.1.2 musicArtistClass](/scd/musicartistclass) ONLY)

---

## [Appendix C](#appendix-c)

### URL Attribute Value Control

This guide applies to the elements:
- [1.4.5.2 albumProducerURL](/scd/albumproducerurl)
- [1.4.8.1.6 trackAudioURL](/scd/trackAudioURL)
- [1.5.2 musicGroupURL](/scd/musicgroupurl)
- [1.6.1.4 musicArtistURL](/scd/musicartisturl)
- [1.7.1.3 contributorURL](/scd/contributorurl)

*Note: Do not use for [1.8.4.2 imageURL](/scd/imageURL)*

#### C.1 URL Type

**original:** the original URL as listed on the CD packaging or its Wayback Machine equivalent

**official:** the current, usually live, URL for the official website of the producer, artist, contributor, music group, etc.

**social:** the URL pointing to the social media profile for the producer, artist, contributor, music group, etc.
streaming: the URL pointing to the audio track on a streaming service such as Spotify, YouTube, or Apple Music.

**other:** the URL pointing to an informational website such as a Wikipedia entry, a MusicBrainz entry, blog post, news article, or other source or information about a producer, artist, contributor, music group, etc.

#### C.2 URL Status

**wayback:** the URL is a Wayback Machine capture of a website (see C.3 Wayback Machine)

**live:** the URL is still functional and can be accessed without a Wayback capture

**broken:** this URL is the original URL as listed on the CD packaging however it is no longer working and an applicable Wayback capture cannot be found

#### C.3 Wayback Machine

The Wayback Machine is a service that archives websites so that the website’s appearance at a given date can be captured and accessed despite any updates to the website after the given date or in case the website is no longer live. This is useful for Secondhand CDs as many websites listed on the CDs are no longer live.

**For More Information:** [Wayback Machine General Information](https://help.archive.org/hc/en-us/articles/360004716091-Wayback-Machine-General-Information)

**Linking to a Wayback Capture:**

**1.** Visit [https://web.archive.org](https://web.archive.org) and type in the original URL as listed on the CD.
For example, entering lukeysboat.com displays this page on the Wayback Machine:

![Lukeys Boat Wayback Machine Calendar](/mlis/metadata/Wayback_001.png)

**2.** Hovering over the highlighted date shows the captures for the day. Click on the bulleted capture to see the capture.

![Lukeys Boat Wayback Machine Capture](/mlis/metadata/Wayback_002.png)

**3.** The address in the address bar of the capture page is the URL you will use for the value.

![Lukeys Boat Wayback Machine Homepage](/mlis/metadata/Wayback_003.png)
