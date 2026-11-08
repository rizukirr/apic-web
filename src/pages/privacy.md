---
title: Privacy policy
description: apic and apic-gui collect no data. What network traffic they make and where your data stays.
---

# Privacy policy

Last updated: 2026-11-09

This policy covers apic, the command line tool, and apic-gui, the desktop app, on every platform and from every place you install them.

## What we collect

Nothing. apic and apic-gui have no telemetry, analytics, crash reporting, accounts or update checks. The developer receives no data from either app.

## Network traffic

The apps only connect to the network when you tell them to:

- Send in apic-gui and `apic send` make the HTTP request described in your contract, to the URL in that contract.
- Clone, fetch, pull and push in apic-gui run `git`, which talks to the repository URL you clone from or the remotes configured in your repository.

The servers you send to are yours or chosen by you, and their own privacy policies apply to that traffic.

## Data on your device

Your contracts, templates, environments and settings stay on your device, in your project folders and in apic-gui's local configuration. Environment files, including the gitignored `.local.toml` files that may hold secrets, are read only to fill in requests you send. apic never uploads any of them. You can delete them at any time.

## Where you got apic

The Microsoft Store, winget, GitHub Releases and other places that distribute apic may collect data under their own privacy policies.

## Children

apic collects no data from anyone, including children.

## Changes

If this policy changes, the new version is posted on this page with a new date.

## Contact

Questions about this policy go to [GitHub Issues](https://github.com/rizukirr/apic/issues), or to [rizkirr.xyz@gmail.com](mailto:rizkirr.xyz@gmail.com) for anything you would rather not post in public.
