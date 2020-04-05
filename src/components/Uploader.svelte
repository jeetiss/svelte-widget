<script>
  import { setContext, createEventDispatcher } from "svelte";
  import { Tabs, TabList, TabPanel, Tab } from "./Tabs";
  import {
    File,
    Camera,
    Url,
    Facebook,
    GoogleDrive,
    GooglePhotos,
    Dropbox,
    Instagram,
    Evernote,
    Flickr,
    OneDrive,
    Box,
    Vk,
    Huddle
  } from "./Icons";
  import Button from "./Button.svelte";
  import Modal from "./Modal.svelte";
  import l10n, { setLocale } from "../l10n";

  export let locale;

  $: setLocale(locale);

  let showModal;

  const dispatch = createEventDispatcher();
</script>

<main>
  <Button on:click="{() => showModal = true}">{$l10n('Upload Files')}</Button>

  {#if showModal}
  <Modal on:close="{() => showModal = false}">
    <Tabs>
      <TabList>
        <Tab><File></File></Tab>
        <Tab><Camera></Camera></Tab>
        <Tab><Url></Url></Tab>
        <Tab><Facebook></Facebook></Tab>
        <Tab><GoogleDrive></GoogleDrive></Tab>
        <Tab><GooglePhotos></GooglePhotos></Tab>
        <Tab><Dropbox></Dropbox></Tab>
        <Tab><Instagram></Instagram></Tab>
        <Tab><Evernote></Evernote></Tab>
        <Tab><Flickr></Flickr></Tab>
        <Tab><OneDrive></OneDrive></Tab>
        <Tab><Box></Box></Tab>
        <Tab><Vk></Vk></Tab>
        <Tab><Huddle></Huddle></Tab>
      </TabList>

      <TabPanel>
        <h2>{$l10n('drag & drop any files')}</h2>

        <p>{$l10n('or')}</p>

        <Button
          on:click="{() => dispatch('uploaded', { uuid: '36cda64e-7f8c-4e54-89f0-6a7b1d90a8dd' })}"
        >
          {$l10n('Chose a local file')}
        </Button>
      </TabPanel>

      <TabPanel>
        <h2>Camera tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>{$l10n('Files from the Web')}</h2>

        <p>
          <input type="text" placeholder="{$l10n('Paste your link here...')}" />
        </p>

        <Button>{$l10n('Upload')}</Button>
      </TabPanel>

      <TabPanel>
        <h2>Facebook tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>GoogleDrive tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>GooglePhotos tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Dropbox tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Instagram tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Evernote tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Flickr tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>OneDrive tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Box tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Vk tab</h2>
      </TabPanel>

      <TabPanel>
        <h2>Huddle tab</h2>
      </TabPanel>
    </Tabs>
  </Modal>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
