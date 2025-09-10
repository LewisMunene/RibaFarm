import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";

const authSchema = zod
  .object({
    fullname: zod.string().min(2, { message: "Full name is required" }),
    email: zod.string().email({ message: "Invalid email address " }),
    password: zod
      .string()
      .min(8, { message: "Password must be at least 8 characters long " }),
    confirmPassword: zod.string().min(8, { message: "Confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function Authentication() {
  const router = useRouter();
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUp = (data: zod.infer<typeof authSchema>) => {
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        Are you a returning farmer?{" "}
        <Text style={styles.signInText} onPress={() => router.push("/signin")}>
          Sign In
        </Text>
      </Text>
      <Text style={styles.title}>Welcome</Text>

      {/* full name */}
      <Controller
        control={control}
        name="fullname"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              placeholder="Enter your full name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="words"
              editable={!formState.isSubmitting}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />

      {/* email */}
      <Controller
        control={control}
        name="email"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              placeholder="Enter your email address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              keyboardType="email-address"
              editable={!formState.isSubmitting}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />

      {/* password */}
      <Controller
        control={control}
        name="password"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              placeholder="Enter your password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              autoCapitalize="none"
              editable={!formState.isSubmitting}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />

      {/* confirm password */}
      <Controller
        control={control}
        name="confirmPassword"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              placeholder="Confirm your password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              autoCapitalize="none"
              editable={!formState.isSubmitting}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />

      {/* sign up button */}
      <TouchableOpacity
        style={[styles.button, formState.isSubmitting && styles.buttonDisabled]}
        onPress={handleSubmit(signUp)}
        disabled={formState.isSubmitting}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* OR separator between buttons */}
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* sign up with google button*/}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonDisabled: {
    backgroundColor: "#9CCC9C",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signInText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  googleButton: {
    padding: 16,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 5,
  },
  googleButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    marginHorizontal: 8,
    color: "#666",
    fontWeight: "bold",
  },
});
