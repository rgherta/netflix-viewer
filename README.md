<h1 align="center">
  <img src="snap/gui/icon.png" alt="[Project]">
  <br />
  Netflix Viewer
</h1>

<p align="center"><b>This is the snap for Netflix Viewer</b>, <i>“Single-line elevator pitch for your amazing snap”</i>. It works on Ubuntu, Fedora, Debian, and other major Linux
distributions.</p>


<p align="center">Published for <img src="https://raw.githubusercontent.com/anythingcodes/slack-emoji-for-techies/gh-pages/emoji/tux.png" align="top" width="24" /> with 💝 by Snapcrafters</p>

## Install

    sudo snap install netflix-viewer

<a href="https://snapcraft.io/netflix-viewer">
  <img alt="Get it from the Snap Store" src="https://snapcraft.io/static/images/badges/en/snap-store-black.svg" />
</a>

([Don't have snapd installed?](https://snapcraft.io/docs/core/install))

# Netflix-Viewer  

This is a simple linux app running netflix.com in a browser. The motivation is to have a standard Netflix app that desktop users can easily access and add to favourites. Castlab fork of electron was used to avoid WVVMP issues. 

## Local installation using NPM

Test with  
```
npm run start
```

Built with electron-builder npm package  

```
npm run dist 
```

Login and upload to snapcraft    

```
snapcraft login  
snapcraft upload --release=stable dist/netflix-viewer_X.X.X_amd64.snap
```

## Local installation using Snapcraft

Make sure you have snapcraft installed  

Edit the snapcraft.yaml file and change npm install to "sudo npm install" (needed when building with default multipass)   
Build   

```
snapcraft  
```

The resulting package can be uploaded to edge channel  

```
snapcraft upload --release=candidate netflix-viewer_0.9.0_amd64.snap  
```


   
    

   




## Remaining tasks

Snapcrafters ([join us](https://forum.snapcraft.io/t/join-snapcrafters/1325)) 
are working to land snap install documentation and
the [snapcraft.yaml](https://github.com/snapcrafters/fork-and-rename-me/blob/master/snap/snapcraft.yaml)
upstream so Netflix Viewer can authoritatively publish future releases.

  - [x] Click the green "Use this template" button above to create a new repository based on this template
  - [x] Give the newly created repository a sensible name, like `godzilla-snap` if you're snapping the Godzilla software
  - [x] Update the description of the repository
  - [x] Update logos and references to `[Project]` and `[netflix-viewer]`
  - [x] Create a snap that runs in `devmode`
  - [x] Register the snap in the store, **using the preferred upstream name**
  - [ ] Add a screenshot to this `README.md`
  - [x] Publish the `devmode` snap in the Snap store edge channel
  - [x] Add install instructions to this `README.md`
  - [x] Update snap store metadata, icons and screenshots
  - [x] Convert the snap to `strict` confinement, or `classic` confinement if it qualifies
  - [x] Publish the confined snap in the Snap store beta channel
  - [x] Update the install instructions in this `README.md`
  - [x] Post a call for testing on the [Snapcraft Forum](https://forum.snapcraft.io) - [link]()
  - [ ] Make a post in the [Snapcraft Forum](https://forum.snapcraft.io) asking for a transfer of the snap name from you to snapcrafters - [link]()
  - [ ] Ask a [Snapcrafters admin](https://github.com/orgs/snapcrafters/people?query=%20role%3Aowner) to fork your repo into github.com/snapcrafters, and configure the repo for automatic publishing into edge on commit
  - [x] Add the provided Snapcraft build badge to this `README.md`
  - [x] Publish the snap in the Snap store stable channel
  - [x] Update the install instructions in this `README.md`
  - [ ] Post an announcement in the [Snapcraft Forum](https://forum.snapcraft.io) - [link]()
  - [x] Submit a pull request or patch upstream that adds snap install documentation - [link]()
  - [x] Submit a pull request or patch upstream that adds the `snapcraft.yaml` and any required assets/launchers - [link]()
  - [ ] Add upstream contact information to the `README.md`  
  - If upstream accept the PR:
    - [ ] Request upstream create a Snap store account
    - [ ] Contact the Snap Advocacy team to request the snap be transferred to upstream
  - [ ] Ask the Snap Advocacy team to celebrate the snap - [link]()

If you have any questions, [post in the Snapcraft forum](https://forum.snapcraft.io).

<!--
## The Snapcrafters

| [![Your Name](https://gravatar.com/avatar/bc0bced65e963eb5c3a16cab8b004431/?s=128)](https://github.com/yourname/) |
| :---: |
| [Your Name](https://github.com/yourname/) |
--> 

<!-- Uncomment and modify this when you have upstream contacts
## Upstream

| [![Upstream Name](https://gravatar.com/avatar/bc0bced65e963eb5c3a16cab8b004431?s=128)](https://github.com/upstreamname) |
| :---: |
| [Upstream Name](https://github.com/upstreamname) |
-->



