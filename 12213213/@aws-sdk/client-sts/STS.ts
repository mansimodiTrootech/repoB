import { STSClient } from "./STSClient";
import { AssumeRoleCommand, AssumeRoleCommandInput, AssumeRoleCommandOutput } from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
} from "./commands/AssumeRoleWithSAMLCommand";
import {
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import {
  DecodeAuthorizationMessageCommand,
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
} from "./commands/DecodeAuthorizationMessageCommand";
import {
  GetAccessKeyInfoCommand,
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput,
} from "./commands/GetAccessKeyInfoCommand";
import {
  GetCallerIdentityCommand,
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
} from "./commands/GetCallerIdentityCommand";
import {
  GetFederationTokenCommand,
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand";
import {
  GetSessionTokenCommand,
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
} from "./commands/GetSessionTokenCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Security Token Service</fullname>
 *          <p>Security Token Service (STS) enables you to request temporary, limited-privilege
 *       credentials for Identity and Access Management (IAM) users or for users that you
 *       authenticate (federated users). This guide provides descriptions of the STS API. For
 *       more information about using this service, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>.</p>
 */
export class STS extends STSClient {
  /**
   * <p>Returns a set of temporary security credentials that you can use to access Amazon Web Services
   *             resources that you might not normally have access to. These temporary credentials
   *             consist of an access key ID, a secret access key, and a security token. Typically, you
   *             use <code>AssumeRole</code> within your account or for cross-account access. For a
   *             comparison of <code>AssumeRole</code> with other API operations that produce temporary
   *             credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
   *                 Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing
   *                 the STS API operations</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Permissions</b>
   *          </p>
   *          <p>The temporary security credentials created by <code>AssumeRole</code> can be used to
   *          make API calls to any Amazon Web Services service with the following exception: You cannot call the
   *          STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
   *          operations.</p>
   *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
   *          this operation. You can pass a single JSON policy document to use as an inline session
   *          policy. You can also specify up to 10 managed policies to use as managed session policies.
   *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
   *          characters. Passing policies to this operation returns new
   *          temporary credentials. The resulting session's permissions are the intersection of the
   *          role's identity-based policy and the session policies. You can use the role's temporary
   *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
   *          the role. You cannot use session policies to grant more permissions than those allowed
   *          by the identity-based policy of the role that is being assumed. For more information, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   *          <p>To assume a role from a different account, your account must be trusted by the
   *          role. The trust relationship is defined in the role's trust policy when the role is
   *          created. That trust policy states which accounts are allowed to delegate that access to
   *          users in the account. </p>
   *          <p>A user who wants to access a role in a different account must also have permissions that
   *          are delegated from the user account administrator. The administrator must attach a policy
   *          that allows the user to call <code>AssumeRole</code> for the ARN of the role in the other
   *          account. If the user is in the same account as the role, then you can do either of the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>Attach a policy to the user (identical to the previous user in a different
   *                account).</p>
   *             </li>
   *             <li>
   *                <p>Add the user as a principal directly in the role's trust policy.</p>
   *             </li>
   *          </ul>
   *          <p>In this case, the trust policy acts as an IAM resource-based policy. Users in the same
   *          account as the role do not need explicit permission to assume the role. For more
   *          information about trust policies and resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in
   *          the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Tags</b>
   *          </p>
   *          <p>(Optional) You can pass tag key-value pairs to your session. These tags are called
   *          session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>An administrator must grant you the permissions necessary to pass session tags. The
   *          administrator can also create granular permissions to allow you to pass only specific
   *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
   *             for Attribute-Based Access Control</a> in the
   *          <i>IAM User Guide</i>.</p>
   *          <p>You can set the session tags as transitive. Transitive tags persist during role
   *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
   *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Using MFA with AssumeRole</b>
   *          </p>
   *          <p>(Optional) You can include multi-factor authentication (MFA) information when you call
   *             <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the
   *          user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that
   *          scenario, the trust policy of the role being assumed includes a condition that tests for
   *          MFA authentication. If the caller does not include valid MFA information, the request to
   *          assume the role is denied. The condition in a trust policy that tests for MFA
   *          authentication might look like the following example.</p>
   *          <p>
   *             <code>"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a>
   *          in the <i>IAM User Guide</i> guide.</p>
   *          <p>To use MFA with <code>AssumeRole</code>, you pass values for the
   *             <code>SerialNumber</code> and <code>TokenCode</code> parameters. The
   *             <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device.
   *          The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device
   *          produces. </p>
   */
  public assumeRole(args: AssumeRoleCommandInput, options?: __HttpHandlerOptions): Promise<AssumeRoleCommandOutput>;
  public assumeRole(args: AssumeRoleCommandInput, cb: (err: any, data?: AssumeRoleCommandOutput) => void): void;
  public assumeRole(
    args: AssumeRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeRoleCommandOutput) => void
  ): void;
  public assumeRole(
    args: AssumeRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssumeRoleCommandOutput) => void),
    cb?: (err: any, data?: AssumeRoleCommandOutput) => void
  ): Promise<AssumeRoleCommandOutput> | void {
    const command = new AssumeRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a set of temporary security credentials for users who have been authenticated
   *          via a SAML authentication response. This operation provides a mechanism for tying an
   *          enterprise identity store or directory to role-based Amazon Web Services access without user-specific
   *          credentials or configuration. For a comparison of <code>AssumeRoleWithSAML</code> with the
   *          other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
   *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
   *             STS API operations</a> in the <i>IAM User Guide</i>.</p>
   *          <p>The temporary security credentials returned by this operation consist of an access key
   *          ID, a secret access key, and a security token. Applications can use these temporary
   *          security credentials to sign calls to Amazon Web Services services.</p>
   *          <p>
   *             <b>Session Duration</b>
   *          </p>
   *          <p>By default, the temporary security credentials created by
   *             <code>AssumeRoleWithSAML</code> last for one hour. However, you can use the optional
   *             <code>DurationSeconds</code> parameter to specify the duration of your session. Your
   *          role session lasts for the duration that you specify, or until the time specified in the
   *          SAML authentication response's <code>SessionNotOnOrAfter</code> value, whichever is
   *          shorter. You can provide a <code>DurationSeconds</code> value from 900 seconds (15 minutes)
   *          up to the maximum session duration setting for the role. This setting can have a value from
   *          1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the
   *             Maximum Session Duration Setting for a Role</a> in the
   *             <i>IAM User Guide</i>. The maximum session duration limit applies when
   *          you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI
   *          commands. However the limit does not apply when you use those operations to create a
   *          console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <note>
   *            <p>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-role-chaining">Role chaining</a> limits your CLI or Amazon Web Services API
   *                role session to a maximum of one hour. When you use the <code>AssumeRole</code> API
   *                operation to assume a role, you can specify the duration of your role session with
   *                the <code>DurationSeconds</code> parameter. You can specify a parameter value of up
   *                to 43200 seconds (12 hours), depending on the maximum session duration setting for
   *                your role. However, if you assume a role using role chaining and provide a
   *                <code>DurationSeconds</code> parameter value greater than one hour, the
   *                operation fails.</p>
   *          </note>
   *          <p>
   *             <b>Permissions</b>
   *          </p>
   *          <p>The temporary security credentials created by <code>AssumeRoleWithSAML</code> can be
   *          used to make API calls to any Amazon Web Services service with the following exception: you cannot call
   *          the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
   *          operations.</p>
   *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
   *          this operation. You can pass a single JSON policy document to use as an inline session
   *          policy. You can also specify up to 10 managed policies to use as managed session policies.
   *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
   *          characters. Passing policies to this operation returns new
   *          temporary credentials. The resulting session's permissions are the intersection of the
   *          role's identity-based policy and the session policies. You can use the role's temporary
   *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
   *          the role. You cannot use session policies to grant more permissions than those allowed
   *          by the identity-based policy of the role that is being assumed. For more information, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   *          <p>Calling <code>AssumeRoleWithSAML</code> does not require the use of Amazon Web Services security
   *          credentials. The identity of the caller is validated by using keys in the metadata document
   *          that is uploaded for the SAML provider entity for your identity provider. </p>
   *          <important>
   *             <p>Calling <code>AssumeRoleWithSAML</code> can result in an entry in your CloudTrail logs.
   *             The entry includes the value in the <code>NameID</code> element of the SAML assertion.
   *             We recommend that you use a <code>NameIDType</code> that is not associated with any
   *             personally identifiable information (PII). For example, you could instead use the
   *             persistent identifier
   *             (<code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code>).</p>
   *          </important>
   *          <p>
   *             <b>Tags</b>
   *          </p>
   *          <p>(Optional) You can configure your IdP to pass attributes into your SAML assertion as
   *          session tags. Each session tag consists of a key name and an associated value. For more
   *          information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128
   *          characters and the values can’t exceed 256 characters. For these and additional limits, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM
   *             and STS Character Limits</a> in the <i>IAM User Guide</i>.</p>
   *
   *          <note>
   *             <p>An Amazon Web Services conversion compresses the passed session policies and session tags into a
   *             packed binary format that has a separate limit. Your request can fail for this limit
   *             even if your plaintext meets the other requirements. The <code>PackedPolicySize</code>
   *             response element indicates by percentage how close the policies and tags for your
   *             request are to the upper size limit.
   *             </p>
   *          </note>
   *          <p>You can pass a session tag with the same key as a tag that is
   *          attached to the role. When you do, session tags override the role's tags with the same
   *          key.</p>
   *          <p>An administrator must grant you the permissions necessary to pass session tags. The
   *          administrator can also create granular permissions to allow you to pass only specific
   *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
   *             for Attribute-Based Access Control</a> in the
   *          <i>IAM User Guide</i>.</p>
   *          <p>You can set the session tags as transitive. Transitive tags persist during role
   *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
   *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>SAML Configuration</b>
   *          </p>
   *          <p>Before your application can call <code>AssumeRoleWithSAML</code>, you must configure
   *          your SAML identity provider (IdP) to issue the claims required by Amazon Web Services. Additionally, you
   *          must use Identity and Access Management (IAM) to create a SAML provider entity in your Amazon Web Services account that
   *          represents your identity provider. You must also create an IAM role that specifies this
   *          SAML provider in its trust policy. </p>
   *          <p>For more information, see the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About
   *                   SAML 2.0-based Federation</a> in the <i>IAM User Guide</i>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html">Creating SAML Identity Providers</a> in the
   *                   <i>IAM User Guide</i>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html">Configuring
   *                   a Relying Party and Claims</a> in the <i>IAM User Guide</i>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html">Creating a Role for SAML 2.0 Federation</a> in the
   *                   <i>IAM User Guide</i>. </p>
   *             </li>
   *          </ul>
   */
  public assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeRoleWithSAMLCommandOutput>;
  public assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    cb: (err: any, data?: AssumeRoleWithSAMLCommandOutput) => void
  ): void;
  public assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeRoleWithSAMLCommandOutput) => void
  ): void;
  public assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssumeRoleWithSAMLCommandOutput) => void),
    cb?: (err: any, data?: AssumeRoleWithSAMLCommandOutput) => void
  ): Promise<AssumeRoleWithSAMLCommandOutput> | void {
    const command = new AssumeRoleWithSAMLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a set of temporary security credentials for users who have been authenticated in
   *          a mobile or web application with a web identity provider. Example providers include Amazon Cognito,
   *          Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity
   *          provider.</p>
   *          <note>
   *             <p>For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the
   *                <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and the <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a> to uniquely
   *             identify a user. You can also supply the user with a consistent identity throughout the
   *             lifetime of an application.</p>
   *             <p>To learn more about Amazon Cognito, see <a href="https://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-auth.html#d0e840">Amazon Cognito Overview</a> in
   *                <i>Amazon Web Services SDK for Android Developer Guide</i> and <a href="https://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-auth.html#d0e664">Amazon Cognito Overview</a> in the
   *                <i>Amazon Web Services SDK for iOS Developer Guide</i>.</p>
   *          </note>
   *          <p>Calling <code>AssumeRoleWithWebIdentity</code> does not require the use of Amazon Web Services
   *          security credentials. Therefore, you can distribute an application (for example, on mobile
   *          devices) that requests temporary security credentials without including long-term Amazon Web Services
   *          credentials in the application. You also don't need to deploy server-based proxy services
   *          that use long-term Amazon Web Services credentials. Instead, the identity of the caller is validated by
   *          using a token from the web identity provider. For a comparison of
   *             <code>AssumeRoleWithWebIdentity</code> with the other API operations that produce
   *          temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
   *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
   *             STS API operations</a> in the <i>IAM User Guide</i>.</p>
   *          <p>The temporary security credentials returned by this API consist of an access key ID, a
   *          secret access key, and a security token. Applications can use these temporary security
   *          credentials to sign calls to Amazon Web Services service API operations.</p>
   *          <p>
   *             <b>Session Duration</b>
   *          </p>
   *          <p>By default, the temporary security credentials created by
   *             <code>AssumeRoleWithWebIdentity</code> last for one hour. However, you can use the
   *          optional <code>DurationSeconds</code> parameter to specify the duration of your session.
   *          You can provide a value from 900 seconds (15 minutes) up to the maximum session duration
   *          setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how
   *          to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the
   *             Maximum Session Duration Setting for a Role</a> in the
   *             <i>IAM User Guide</i>. The maximum session duration limit applies when
   *          you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI
   *          commands. However the limit does not apply when you use those operations to create a
   *          console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
   *             <i>IAM User Guide</i>. </p>
   *          <p>
   *             <b>Permissions</b>
   *          </p>
   *          <p>The temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> can
   *          be used to make API calls to any Amazon Web Services service with the following exception: you cannot
   *          call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
   *          operations.</p>
   *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
   *          this operation. You can pass a single JSON policy document to use as an inline session
   *          policy. You can also specify up to 10 managed policies to use as managed session policies.
   *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
   *          characters. Passing policies to this operation returns new
   *          temporary credentials. The resulting session's permissions are the intersection of the
   *          role's identity-based policy and the session policies. You can use the role's temporary
   *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
   *          the role. You cannot use session policies to grant more permissions than those allowed
   *          by the identity-based policy of the role that is being assumed. For more information, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Tags</b>
   *          </p>
   *          <p>(Optional) You can configure your IdP to pass attributes into your web identity token as
   *          session tags. Each session tag consists of a key name and an associated value. For more
   *          information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128
   *          characters and the values can’t exceed 256 characters. For these and additional limits, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM
   *             and STS Character Limits</a> in the <i>IAM User Guide</i>.</p>
   *
   *          <note>
   *             <p>An Amazon Web Services conversion compresses the passed session policies and session tags into a
   *             packed binary format that has a separate limit. Your request can fail for this limit
   *             even if your plaintext meets the other requirements. The <code>PackedPolicySize</code>
   *             response element indicates by percentage how close the policies and tags for your
   *             request are to the upper size limit.
   *             </p>
   *          </note>
   *          <p>You can pass a session tag with the same key as a tag that is
   *          attached to the role. When you do, the session tag overrides the role tag with the same
   *          key.</p>
   *          <p>An administrator must grant you the permissions necessary to pass session tags. The
   *          administrator can also create granular permissions to allow you to pass only specific
   *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
   *             for Attribute-Based Access Control</a> in the
   *          <i>IAM User Guide</i>.</p>
   *          <p>You can set the session tags as transitive. Transitive tags persist during role
   *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
   *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Identities</b>
   *          </p>
   *          <p>Before your application can call <code>AssumeRoleWithWebIdentity</code>, you must have
   *          an identity token from a supported identity provider and create a role that the application
   *          can assume. The role that your application assumes must trust the identity provider that is
   *          associated with the identity token. In other words, the identity provider must be specified
   *          in the role's trust policy. </p>
   *          <important>
   *             <p>Calling <code>AssumeRoleWithWebIdentity</code> can result in an entry in your
   *             CloudTrail logs. The entry includes the <a href="http://openid.net/specs/openid-connect-core-1_0.html#Claims">Subject</a> of
   *             the provided web identity token. We recommend that you avoid using any personally
   *             identifiable information (PII) in this field. For example, you could instead use a GUID
   *             or a pairwise identifier, as <a href="http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes">suggested
   *                in the OIDC specification</a>.</p>
   *          </important>
   *          <p>For more information about how to use web identity federation and the
   *             <code>AssumeRoleWithWebIdentity</code> API, see the following resources: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html">Using Web Identity Federation API Operations for Mobile Apps</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://aws.amazon.com/blogs/aws/the-aws-web-identity-federation-playground/"> Web Identity Federation Playground</a>. Walk through the process of
   *                authenticating through Login with Amazon, Facebook, or Google, getting temporary
   *                security credentials, and then using those credentials to make a request to Amazon Web Services.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a>. These toolkits
   *                contain sample apps that show how to invoke the identity providers. The toolkits then
   *                show how to use the information from these providers to get and use temporary
   *                security credentials. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="http://aws.amazon.com/articles/web-identity-federation-with-mobile-applications">Web Identity
   *                   Federation with Mobile Applications</a>. This article discusses web identity
   *                federation and shows an example of how to use web identity federation to get access
   *                to content in Amazon S3. </p>
   *             </li>
   *          </ul>
   */
  public assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeRoleWithWebIdentityCommandOutput>;
  public assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    cb: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): void;
  public assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): void;
  public assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void),
    cb?: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): Promise<AssumeRoleWithWebIdentityCommandOutput> | void {
    const command = new AssumeRoleWithWebIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Decodes additional information about the authorization status of a request from an
   *          encoded message returned in response to an Amazon Web Services request.</p>
   *          <p>For example, if a user is not authorized to perform an operation that he or she has
   *          requested, the request returns a <code>Client.UnauthorizedOperation</code> response (an
   *          HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can
   *          provide details about this authorization failure. </p>
   *          <note>
   *             <p>Only certain Amazon Web Services operations return an encoded authorization message. The
   *             documentation for an individual operation indicates whether that operation returns an
   *             encoded message in addition to returning an HTTP code.</p>
   *          </note>
   *          <p>The message is encoded because the details of the authorization status can constitute
   *          privileged information that the user who requested the operation should not see. To decode
   *          an authorization status message, a user must be granted permissions via an IAM policy to
   *          request the <code>DecodeAuthorizationMessage</code>
   *             (<code>sts:DecodeAuthorizationMessage</code>) action. </p>
   *          <p>The decoded message includes the following type of information:</p>
   *          <ul>
   *             <li>
   *                <p>Whether the request was denied due to an explicit deny or due to the absence of an
   *                explicit allow. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow">Determining Whether a Request is Allowed or Denied</a> in the
   *                   <i>IAM User Guide</i>. </p>
   *             </li>
   *             <li>
   *                <p>The principal who made the request.</p>
   *             </li>
   *             <li>
   *                <p>The requested action.</p>
   *             </li>
   *             <li>
   *                <p>The requested resource.</p>
   *             </li>
   *             <li>
   *                <p>The values of condition keys in the context of the user's request.</p>
   *             </li>
   *          </ul>
   */
  public decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecodeAuthorizationMessageCommandOutput>;
  public decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    cb: (err: any, data?: DecodeAuthorizationMessageCommandOutput) => void
  ): void;
  public decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecodeAuthorizationMessageCommandOutput) => void
  ): void;
  public decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DecodeAuthorizationMessageCommandOutput) => void),
    cb?: (err: any, data?: DecodeAuthorizationMessageCommandOutput) => void
  ): Promise<DecodeAuthorizationMessageCommandOutput> | void {
    const command = new DecodeAuthorizationMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the account identifier for the specified access key ID.</p>
   *         <p>Access keys consist of two parts: an access key ID (for example,
   *                 <code>AKIAIOSFODNN7EXAMPLE</code>) and a secret access key (for example,
   *                 <code>wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code>). For more information about
   *             access keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">Managing Access Keys for IAM
   *                 Users</a> in the <i>IAM User Guide</i>.</p>
   *         <p>When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services
   *             account to which the keys belong. Access key IDs beginning with <code>AKIA</code> are
   *             long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs
   *             beginning with <code>ASIA</code> are temporary credentials that are created using STS
   *             operations. If the account in the response belongs to you, you can sign in as the root
   *             user and review your root user access keys. Then, you can pull a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">credentials report</a> to learn which IAM user owns the keys. To learn who
   *             requested the temporary credentials for an <code>ASIA</code> access key, view the STS
   *             events in your <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">CloudTrail logs</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         <p>This operation does not indicate the state of the access key. The key might be active,
   *             inactive, or deleted. Active keys might not have permissions to perform an operation.
   *             Providing a deleted access key might return an error that the key doesn't exist.</p>
   */
  public getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessKeyInfoCommandOutput>;
  public getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    cb: (err: any, data?: GetAccessKeyInfoCommandOutput) => void
  ): void;
  public getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessKeyInfoCommandOutput) => void
  ): void;
  public getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessKeyInfoCommandOutput) => void),
    cb?: (err: any, data?: GetAccessKeyInfoCommandOutput) => void
  ): Promise<GetAccessKeyInfoCommandOutput> | void {
    const command = new GetAccessKeyInfoCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details about the IAM user or role whose credentials are used to call the
   *             operation.</p>
   *         <note>
   *             <p>No permissions are required to perform this operation. If an administrator adds a
   *                 policy to your IAM user or role that explicitly denies access to the
   *                     <code>sts:GetCallerIdentity</code> action, you can still perform this operation.
   *                 Permissions are not required because the same information is returned when an IAM
   *                 user or role is denied access. To view an example response, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa">I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCallerIdentityCommandOutput>;
  public getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    cb: (err: any, data?: GetCallerIdentityCommandOutput) => void
  ): void;
  public getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCallerIdentityCommandOutput) => void
  ): void;
  public getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCallerIdentityCommandOutput) => void),
    cb?: (err: any, data?: GetCallerIdentityCommandOutput) => void
  ): Promise<GetCallerIdentityCommandOutput> | void {
    const command = new GetCallerIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a set of temporary security credentials (consisting of an access key ID, a
   *          secret access key, and a security token) for a federated user. A typical use is in a proxy
   *          application that gets temporary security credentials on behalf of distributed applications
   *          inside a corporate network. You must call the <code>GetFederationToken</code> operation
   *          using the long-term security credentials of an IAM user. As a result, this call is
   *          appropriate in contexts where those credentials can be safely stored, usually in a
   *          server-based application. For a comparison of <code>GetFederationToken</code> with the
   *          other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
   *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
   *             STS API operations</a> in the <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>You can create a mobile-based or browser-based app that can authenticate users using
   *             a web identity provider like Login with Amazon, Facebook, Google, or an OpenID
   *             Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or
   *                <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the
   *                <i>IAM User Guide</i>.</p>
   *          </note>
   *          <p>You can also call <code>GetFederationToken</code> using the security credentials of an
   *          Amazon Web Services account root user, but we do not recommend it. Instead, we recommend that you create
   *          an IAM user for the purpose of the proxy application. Then attach a policy to the IAM
   *          user that limits federated users to only the actions and resources that they need to
   *          access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">IAM Best Practices</a> in the
   *             <i>IAM User Guide</i>. </p>
   *          <p>
   *             <b>Session duration</b>
   *          </p>
   *          <p>The temporary credentials are valid for the specified duration, from 900 seconds (15
   *          minutes) up to a maximum of 129,600 seconds (36 hours). The default session duration is
   *          43,200 seconds (12 hours). Temporary credentials that are obtained by using Amazon Web Services account
   *          root user credentials have a maximum duration of 3,600 seconds (1 hour).</p>
   *          <p>
   *             <b>Permissions</b>
   *          </p>
   *          <p>You can use the temporary credentials created by <code>GetFederationToken</code> in any
   *          Amazon Web Services service except the following:</p>
   *          <ul>
   *             <li>
   *                <p>You cannot call any IAM operations using the CLI or the Amazon Web Services API. </p>
   *             </li>
   *             <li>
   *                <p>You cannot call any STS operations except <code>GetCallerIdentity</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to
   *          this operation. You can pass a single JSON policy document to use as an inline session
   *          policy. You can also specify up to 10 managed policies to use as managed session policies.
   *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
   *          characters.</p>
   *          <p>Though the session policy parameters are optional, if you do not pass a policy, then the
   *          resulting federated user session has no permissions. When you pass session policies, the
   *          session permissions are the intersection of the IAM user policies and the session
   *          policies that you pass. This gives you a way to further restrict the permissions for a
   *          federated user. You cannot use session policies to grant more permissions than those that
   *          are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
   *             Policies</a> in the <i>IAM User Guide</i>. For information about
   *          using <code>GetFederationToken</code> to create temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken">GetFederationToken—Federation Through a Custom Identity Broker</a>. </p>
   *          <p>You can use the credentials to access a resource that has a resource-based policy. If
   *          that policy specifically references the federated user session in the
   *             <code>Principal</code> element of the policy, the session has the permissions allowed by
   *          the policy. These permissions are granted in addition to the permissions granted by the
   *          session policies.</p>
   *          <p>
   *             <b>Tags</b>
   *          </p>
   *          <p>(Optional) You can pass tag key-value pairs to your session. These are called session
   *          tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <note>
   *             <p>You can create a mobile-based or browser-based app that can authenticate users
   *                 using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID
   *                 Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or
   *                     <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </note>
   *         <p>You can also call <code>GetFederationToken</code> using the security credentials of an
   *             Amazon Web Services account root user, but we do not recommend it. Instead, we recommend that you
   *             create an IAM user for the purpose of the proxy application. Then attach a policy to
   *             the IAM user that limits federated users to only the actions and resources that they
   *             need to access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">IAM Best Practices</a> in the
   *                 <i>IAM User Guide</i>. </p>
   *         <p>
   *             <b>Session duration</b>
   *          </p>
   *         <p>The temporary credentials are valid for the specified duration, from 900 seconds (15
   *             minutes) up to a maximum of 129,600 seconds (36 hours). The default session duration is
   *             43,200 seconds (12 hours). Temporary credentials that are obtained by using Amazon Web Services
   *             account root user credentials have a maximum duration of 3,600 seconds (1 hour).</p>
   *         <p>
   *             <b>Permissions</b>
   *         </p>
   *         <p>You can use the temporary credentials created by <code>GetFederationToken</code> in
   *             any Amazon Web Services service except the following:</p>
   *         <ul>
   *             <li>
   *                 <p>You cannot call any IAM operations using the CLI or the Amazon Web Services API.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>You cannot call any STS operations except
   *                     <code>GetCallerIdentity</code>.</p>
   *             </li>
   *          </ul>
   *         <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to
   *             this operation. You can pass a single JSON policy document to use as an inline session
   *             policy. You can also specify up to 10 managed policies to use as managed session
   *             policies. The plain text that you use for both inline and managed session policies can't
   *             exceed 2,048 characters.</p>
   *         <p>Though the session policy parameters are optional, if you do not pass a policy, then
   *             the resulting federated user session has no permissions. When you pass session policies,
   *             the session permissions are the intersection of the IAM user policies and the session
   *             policies that you pass. This gives you a way to further restrict the permissions for a
   *             federated user. You cannot use session policies to grant more permissions than those
   *             that are defined in the permissions policy of the IAM user. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a>
   *             in the <i>IAM User Guide</i>. For information about using
   *                 <code>GetFederationToken</code> to create temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken">GetFederationToken—Federation Through a Custom Identity Broker</a>. </p>
   *         <p>You can use the credentials to access a resource that has a resource-based policy. If
   *             that policy specifically references the federated user session in the
   *                 <code>Principal</code> element of the policy, the session has the permissions
   *             allowed by the policy. These permissions are granted in addition to the permissions
   *             granted by the session policies.</p>
   *         <p>
   *             <b>Tags</b>
   *          </p>
   *         <p>(Optional) You can pass tag key-value pairs to your session. These are called session
   *             tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in
   *             the <i>IAM User Guide</i>.</p>
   *         <p>An administrator must grant you the permissions necessary to pass session tags. The
   *             administrator can also create granular permissions to allow you to pass only specific
   *             session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using
   *                 Tags for Attribute-Based Access Control</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you
   *             cannot have separate <code>Department</code> and <code>department</code> tag keys.
   *             Assume that the user that you are federating has the
   *                 <code>Department</code>=<code>Marketing</code> tag and you pass the
   *                 <code>department</code>=<code>engineering</code> session tag.
   *                 <code>Department</code> and <code>department</code> are not saved as separate tags,
   *             and the session tag passed in the request takes precedence over the user tag.</p>
   */
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFederationTokenCommandOutput>;
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFederationTokenCommandOutput) => void),
    cb?: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): Promise<GetFederationTokenCommandOutput> | void {
    const command = new GetFederationTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The
   *          credentials consist of an access key ID, a secret access key, and a security token.
   *          Typically, you use <code>GetSessionToken</code> if you want to use MFA to protect
   *          programmatic calls to specific Amazon Web Services API operations like Amazon EC2 <code>StopInstances</code>.
   *          MFA-enabled IAM users would need to call <code>GetSessionToken</code> and submit an MFA
   *          code that is associated with their MFA device. Using the temporary security credentials
   *          that are returned from the call, IAM users can then make programmatic calls to API
   *          operations that require MFA authentication. If you do not supply a correct MFA code, then
   *          the API returns an access denied error. For a comparison of <code>GetSessionToken</code>
   *          with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting
   *             Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
   *             STS API operations</a> in the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Session Duration</b>
   *          </p>
   *          <p>The <code>GetSessionToken</code> operation must be called by using the long-term Amazon Web Services
   *          security credentials of the Amazon Web Services account root user or an IAM user. Credentials that are
   *          created by IAM users are valid for the duration that you specify. This duration can range
   *          from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default
   *          of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900
   *          seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. </p>
   *          <p>
   *             <b>Permissions</b>
   *          </p>
   *          <p>The temporary security credentials created by <code>GetSessionToken</code> can be used
   *          to make API calls to any Amazon Web Services service with the following exceptions:</p>
   *          <ul>
   *             <li>
   *                <p>You cannot call any IAM API operations unless MFA authentication information is
   *                included in the request.</p>
   *             </li>
   *             <li>
   *                <p>You cannot call any STS API <i>except</i>
   *                   <code>AssumeRole</code> or <code>GetCallerIdentity</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>We recommend that you do not call <code>GetSessionToken</code> with Amazon Web Services account
   *             root user credentials. Instead, follow our <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users">best practices</a> by
   *             creating one or more IAM users, giving them the necessary permissions, and using IAM
   *             users for everyday interaction with Amazon Web Services. </p>
   *          </note>
   *          <p>The credentials that are returned by <code>GetSessionToken</code> are based on
   *          permissions associated with the user whose credentials were used to call the operation. If
   *             <code>GetSessionToken</code> is called using Amazon Web Services account root user credentials, the
   *          temporary credentials have root user permissions. Similarly, if
   *             <code>GetSessionToken</code> is called using the credentials of an IAM user, the
   *          temporary credentials have the same permissions as the IAM user. </p>
   *          <p>For more information about using <code>GetSessionToken</code> to create temporary
   *          credentials, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken">Temporary
   *             Credentials for Users in Untrusted Environments</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  public getSessionToken(
    args: GetSessionTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionTokenCommandOutput>;
  public getSessionToken(
    args: GetSessionTokenCommandInput,
    cb: (err: any, data?: GetSessionTokenCommandOutput) => void
  ): void;
  public getSessionToken(
    args: GetSessionTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionTokenCommandOutput) => void
  ): void;
  public getSessionToken(
    args: GetSessionTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSessionTokenCommandOutput) => void),
    cb?: (err: any, data?: GetSessionTokenCommandOutput) => void
  ): Promise<GetSessionTokenCommandOutput> | void {
    const command = new GetSessionTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
