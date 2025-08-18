---
slug: support/root-certificate-expiration
title: "Root certificate expiration issues in Waterfox"
---

When a root certificate used to validate websites or add-ons expires, you may see secure connection failures or add-ons being disabled.

## What happens

- Certificates have expiration dates. If a widely used root certificate expires without an updated replacement, affected connections or signatures may fail.
- Symptoms can include HTTPS errors, add-ons disabled due to signature checks, or warnings on previously working sites.

## What you can do

- Update Waterfox to the latest version to receive updated certificate stores and fixes.
- Check your system date and time; incorrect clocks can cause certificate validation errors.
- If the issue persists for specific sites, contact the site owner; they may need to update their certificate chain.

## Related

- [Error codes for secure websites](/support/error-codes-secure-websites)
- [What does “Your connection is not secure” mean?](/support/what-does-your-connection-is-not-secure-mean)

---

:::note[Copyright and Licensing]{icon="document"}
Modified from [Root certificate expiration](https://support.mozilla.org/en-US/kb/root-certificate-expiration). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/root-certificate-expiration#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::

